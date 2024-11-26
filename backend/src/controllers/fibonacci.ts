import { FastifyReply, FastifyRequest } from 'fastify'

import { fibonacciParamsSchema } from '../schemas/fibonacci'
import { getFibonacciNumber } from '../services/fibonacci'

export const getFibonacciHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const parseResult = fibonacciParamsSchema.safeParse(request.params)

  if (!parseResult.success) {
    return reply
      .status(400)
      .send({ error: parseResult.error.errors[0].message })
  }

  const { n } = parseResult.data

  try {
    const result = getFibonacciNumber(n)
    return reply.send({ result: result.toString() })
  } catch (error) {
    console.error(error)
    return reply.status(500).send({ error: 'An unexpected error occurred.' })
  }
}
