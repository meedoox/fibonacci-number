import { z } from 'zod'

import { MAX_NUMBER } from '../server'

export const fibonacciParamsSchema = z.object({
  n: z
    .string()
    .regex(/^\d+$/, { message: 'Number must be a non-negative integer.' })
    .transform((val) => parseInt(val, 10))
    .refine((val) => val >= 0 && val <= MAX_NUMBER, {
      message: `Number must be between 0 and ${MAX_NUMBER}`,
    }),
})
