import { WorkflowTask } from '@zhenyue/db'

export interface Executor {
  submit(task: WorkflowTask): Promise<string>
  cancel?(taskId: string): Promise<void>
  start(): void
  close(): void
}
