import { PostgreSqlContainer } from '@testcontainers/postgresql'
import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import { Wait } from 'testcontainers'

const execAsync = promisify(exec)

let dbContainer: import('@testcontainers/postgresql').StartedPostgreSqlContainer

export async function globalTestSetup() {
  // Testcontainers unrefs the reaper socket before connecting. Keep Bun alive until setup finishes.
  const keepAlive = setInterval(() => undefined, 1000)
  try {
    console.log('Starting Testcontainers for global setup...')
    dbContainer = await new PostgreSqlContainer('pgvector/pgvector:pg18')
      .withWaitStrategy(
        // casting to any due to testcontainers wait strategy type mismatch
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Wait.forLogMessage('database system is ready to accept connections', 1) as any,
      )
      .start()

    const databaseUrl = dbContainer.getConnectionUri()
    console.log('Database started at:', databaseUrl)

    process.env.DATABASE_URL = databaseUrl

    console.log('Applying Prisma Migrations...')
    await execAsync('bun run prisma migrate deploy', {
      env: {
        ...process.env,
        DATABASE_URL: databaseUrl,
      },
    })
    console.log('Prisma Migrations completed.')
  } finally {
    clearInterval(keepAlive)
  }
}

export async function setup() {
  await globalTestSetup()
}

export async function teardown() {
  await dbContainer?.stop()
}
