import cors from '@fastify/cors'
import dotenv from 'dotenv'
import { FastifyInstance } from 'fastify'

dotenv.config()
const FRONTEND_HOST = process.env.FRONTEND_HOST

export const registerCors = async (fastify: FastifyInstance) => {
  await fastify.register(cors, {
    origin: FRONTEND_HOST,
    methods: ['GET'],
  })
}
