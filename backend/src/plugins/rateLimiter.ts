import rateLimit from '@fastify/rate-limit'
import { FastifyInstance } from 'fastify'

export const registerRateLimiter = async (fastify: FastifyInstance) => {
  await fastify.register(rateLimit, {
    max: 100,
    timeWindow: 5000,
  })
}
