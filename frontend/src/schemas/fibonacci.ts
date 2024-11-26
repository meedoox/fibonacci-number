import { z } from 'zod'

export const fibonacciSchema = z.object({
  n: z
    .string()
    .regex(/^\d+$/, { message: 'Number must be a non-negative integer.' })
    .transform((val) => parseInt(val, 10)),
})

export type FibonacciInput = z.infer<typeof fibonacciSchema>
