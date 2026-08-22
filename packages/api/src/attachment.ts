import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { postAttachmentRequestSchema, AuditAction } from '@zhenyue/dtos'
import { assetService } from '@zhenyue/core/src/asset/asset'
import { s3Service } from '@zhenyue/core/src/s3/s3'
import { auditLogService } from '@zhenyue/core/src/auditLog/auditLog'
import { projectService } from '@zhenyue/core/src/project/project'
import { AssetType } from '@zhenyue/db'
import { ulid } from 'ulid'
import { authzService, Permission, ResourceType } from '@zhenyue/core/src/authz/authz'
import type { Prisma } from '@zhenyue/db'

type User = Prisma.UserGetPayload<Record<string, never>>

const route = new Hono<{ Variables: { user: User } }>().post(
  '/projects/:projectId/attachments',
  zValidator('json', postAttachmentRequestSchema),
  async (c) => {
    const projectId = c.req.param('projectId')
    const user = c.get('user')
    const req = c.req.valid('json')

    await authzService.hasPermission({
      user,
      permission: Permission.Edit,
      type: ResourceType.Project,
      id: projectId,
    })

    const key = `attachments/${ulid()}/${req.fileName}`

    const assetInfo = await assetService.createAsset({
      name: req.fileName,
      type: AssetType.attachment,
      projectId: projectId,
      key: key,
      sizeByte: req.size,
      contentType: req.contentType,
      creatorId: user.id,
    })

    const teamId = await projectService.getProjectTeam(projectId).catch(() => null)
    if (teamId) {
      await auditLogService.logAction({
        action: AuditAction.file_create,
        teamId,
        userId: user.id,
        projectId,
        itemId: assetInfo.id,
      })
    }

    const uploadUrl = await s3Service.presign(process.env.S3_BUCKET || 'zhenyue', key, 'PUT')

    return c.json({
      id: assetInfo.id,
      uploadUrl: uploadUrl,
    })
  },
)

export default route
