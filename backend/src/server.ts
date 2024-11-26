import dotenv from 'dotenv'

import { buildApp } from './app'

dotenv.config()

export const MAX_NUMBER = Number(process.env.MAX_NUMBER) || 10000

const startServer = async () => {
  const fastify = await buildApp()

  try {
    const PORT = process.env.PORT || 3000
    fastify.listen({ port: Number(PORT) }, (err) => {
      if (err) throw err
      console.log(`Server is running at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

startServer()
