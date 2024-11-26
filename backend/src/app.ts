import Fastify from 'fastify'

import { registerCors } from './plugins/cors'
import { registerHelmet } from './plugins/helmet'
import { registerRateLimiter } from './plugins/rateLimiter'
import { fibonacciRoutes } from './routes/fibonacci'

export const buildApp = async () => {
  const fastify = Fastify()

  // PLUGINS
  await registerCors(fastify)
  await registerHelmet(fastify)
  await registerRateLimiter(fastify)

  // ROUTES
  fastify.register(fibonacciRoutes)

  return fastify
}
