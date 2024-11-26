import { FastifyInstance } from 'fastify'

import { getFibonacciHandler } from '../controllers/fibonacci'

export const fibonacciRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/fibonacci/:n', getFibonacciHandler)
}
