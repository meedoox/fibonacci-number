import helmet from '@fastify/helmet'
import { FastifyInstance } from 'fastify'

export const registerHelmet = async (fastify: FastifyInstance) => {
  await fastify.register(helmet)
}
