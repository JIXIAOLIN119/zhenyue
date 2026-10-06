import { EventEmitter } from 'node:events'
import type { Worker } from 'node:worker_threads'
import { DefaultLogger } from '@temporalio/worker'
import { WorkerThreadClient } from '@temporalio/worker/lib/workflow/threaded-vm'
import { afterEach, describe, expect, it, vi } from 'vitest'

// Exercise the SDK boundary: newer Bun returns Node's normal termination code (1).
describe('Temporal Bun worker shutdown compatibility', () => {
  afterEach(() => vi.restoreAllMocks())
  it('accepts normal termination code 1 after a successful destroy request', async () => {
    const worker = new EventEmitter() as unknown as Worker
    const client = new WorkerThreadClient(worker, new DefaultLogger('ERROR'))
    vi.spyOn(client, 'send').mockResolvedValue(undefined)
    const shutdown = client as unknown as { terminateWithBunWorkaround(): Promise<number> }
    vi.spyOn(shutdown, 'terminateWithBunWorkaround').mockResolvedValue(1)

    await expect(client.destroy()).resolves.toBeUndefined()
  })
  it('returns when termination resolves before the exit event arrives', async () => {
    const worker = Object.assign(new EventEmitter(), { terminate: vi.fn().mockResolvedValue(1) })
    const client = new WorkerThreadClient(worker as unknown as Worker, new DefaultLogger('ERROR'))
    vi.spyOn(client, 'send').mockResolvedValue(undefined)
    await expect(client.destroy()).resolves.toBeUndefined()
    expect(worker.terminate).toHaveBeenCalledOnce()
  })

  it('still rejects unexpected termination codes', async () => {
    const worker = new EventEmitter() as unknown as Worker
    const client = new WorkerThreadClient(worker, new DefaultLogger('ERROR'))
    vi.spyOn(client, 'send').mockResolvedValue(undefined)
    const shutdown = client as unknown as { terminateWithBunWorkaround(): Promise<number> }
    vi.spyOn(shutdown, 'terminateWithBunWorkaround').mockResolvedValue(2)
    await expect(client.destroy()).rejects.toThrow('exit code: 2')
  })
})
