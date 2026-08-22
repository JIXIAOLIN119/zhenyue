import base from './vitest.config'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  ...base,
  test: {
    ...base.test,
    globalSetup: [],
    include: ['packages/core/src/project/project-auto-cover.test.ts'],
    pool: 'threads',
  },
})
