import { describe, it, expect, vi, beforeEach } from 'vitest'
import { prisma } from '@zhenyue/db'
import { s3Service } from '@zhenyue/core/src/s3/s3'
import { ProjectService } from './project'

vi.mock('@zhenyue/db', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@zhenyue/db')>()
  return {
    ...actual,
    prisma: {
      project: { findUnique: vi.fn(), findMany: vi.fn() },
      asset: { findMany: vi.fn() },
      teamMember: { findMany: vi.fn(), findUnique: vi.fn() },
    },
  }
})

vi.mock('@zhenyue/core/src/s3/s3', () => ({
  s3Service: { presign: vi.fn(), deleteObject: vi.fn(), deletePrefix: vi.fn() },
}))

const baseProject = {
  id: 'p1',
  name: 'P',
  teamId: 't1',
  coverImageKey: null,
  enableNotification: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  rootFolderId: null,
  shareRootId: null,
  metadataOverrides: null,
  rootFolder: null,
}

function assetRows(...media: unknown[]) {
  // The mocked asset rows only need the media field, but the mock is typed
  // against the full Prisma Asset row, so a cast is required here.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return media.map((m) => ({ media: m })) as any
}

describe('ProjectService auto cover from project files', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(s3Service.presign).mockResolvedValue('http://s3/presigned')
    vi.mocked(prisma.project.findUnique).mockResolvedValue(baseProject)
  })

  it('derives cover from the first image thumbnail', async () => {
    vi.mocked(prisma.asset.findMany).mockResolvedValue(
      assetRows(
        { thumbnail: { key: 'thumbs/cover.png' }, poster: undefined },
        { thumbnail: undefined, poster: { key: 'posters/clip.jpg' } },
      ),
    )

    const info = await new ProjectService().getProject('p1')

    expect(prisma.asset.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ projectId: 'p1', isDeleted: false, type: 'file' }),
        orderBy: [{ sortIndex: 'asc' }, { createdAt: 'asc' }],
        take: 50,
      }),
    )
    expect(info.coverImage).toBe('http://s3/presigned')
    expect(s3Service.presign).toHaveBeenCalledWith(expect.any(String), 'thumbs/cover.png', 'GET')
  })

  it('uses video poster when there is no image thumbnail', async () => {
    vi.mocked(prisma.asset.findMany).mockResolvedValue(
      assetRows(
        { thumbnail: undefined, poster: undefined },
        { thumbnail: undefined, poster: { key: 'posters/clip.jpg' } },
      ),
    )

    const info = await new ProjectService().getProject('p1')

    expect(info.coverImage).toBe('http://s3/presigned')
    expect(s3Service.presign).toHaveBeenCalledWith(expect.any(String), 'posters/clip.jpg', 'GET')
  })

  it('prefers the uploaded cover and skips derivation', async () => {
    vi.mocked(prisma.project.findUnique).mockResolvedValue({
      ...baseProject,
      coverImageKey: 'covers/uploaded.jpg',
    })

    const info = await new ProjectService().getProject('p1')

    expect(info.coverImage).toBe('http://s3/presigned')
    expect(s3Service.presign).toHaveBeenCalledWith(expect.any(String), 'covers/uploaded.jpg', 'GET')
    expect(prisma.asset.findMany).not.toHaveBeenCalled()
  })

  it('returns no cover when no coverable files exist', async () => {
    vi.mocked(prisma.asset.findMany).mockResolvedValue(
      assetRows({ thumbnail: undefined, poster: undefined }),
    )

    const info = await new ProjectService().getProject('p1')

    expect(info.coverImage).toBeUndefined()
    expect(s3Service.presign).not.toHaveBeenCalled()
    expect(prisma.asset.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ projectId: 'p1', isDeleted: false, type: 'file' }),
      }),
    )
  })

  it('picks the first coverable file in project order', async () => {
    vi.mocked(prisma.asset.findMany).mockResolvedValue(
      assetRows(
        { thumbnail: undefined, poster: undefined },
        { thumbnail: { key: 'thumbs/photo.jpg' }, poster: undefined },
      ),
    )

    const info = await new ProjectService().getProject('p1')

    expect(info.coverImage).toBe('http://s3/presigned')
    expect(s3Service.presign).toHaveBeenCalledWith(expect.any(String), 'thumbs/photo.jpg', 'GET')
  })

  it('does not derive covers in getUserProjects', async () => {
    vi.mocked(prisma.teamMember.findMany).mockResolvedValue([
      {
        id: 'tm1',
        teamId: 't1',
        userId: 'u1',
        role: 'editor',
        scope: 'team',
        lastReadNotificationId: null,
      },
    ])
    vi.mocked(prisma.project.findMany).mockResolvedValue([{ ...baseProject }])

    const result = await new ProjectService().getUserProjects('u1')

    expect(result).toHaveLength(1)
    expect(result[0].coverImage).toBeUndefined()
    expect(prisma.asset.findMany).not.toHaveBeenCalled()
  })
})
