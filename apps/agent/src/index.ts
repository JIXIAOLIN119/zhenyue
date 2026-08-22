import { loadEnvConfig } from '@zhenyue/core/src/env-loader'
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== 'production')

import { workflowService } from '@zhenyue/workflow-core'
import { TaskQueueAgent } from '@zhenyue/workflow-core'
import { initAgentWorkflows } from '@zhenyue/agent'
import { handleDaemonCommands } from '@zhenyue/core/src/utils/daemon'

if (process.argv.includes('--check')) {
  console.log('✅ Agent worker evaluated successfully!')
  process.exit(0)
}

async function run() {
  // Initialize workflows and activities
  initAgentWorkflows()

  console.log('🚀 Starting Agent Worker...')

  const options: { workflowBundle?: unknown; workflowsPath?: string } = {}
  if (process.env.NODE_ENV === 'production') {
    // @ts-ignore: Bun temporal plugin macro
    const { default: workflowBundle } = await import('./workflows.ts:::workflow')
    options.workflowBundle = workflowBundle
  } else {
    options.workflowsPath = new URL('./workflows.ts', import.meta.url).pathname
  }

  await workflowService.startWorkers(TaskQueueAgent, options)
}

handleDaemonCommands('zhenyue-agent', run).catch((err) => {
  console.error(err)
  process.exit(1)
})
