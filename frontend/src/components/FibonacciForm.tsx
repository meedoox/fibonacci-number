import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { FibonacciInput, fibonacciSchema } from '../schemas/fibonacci'

type Props = {
  onSubmit: (n: number) => void
}

const FibonacciForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FibonacciInput>({
    resolver: zodResolver(fibonacciSchema),
  })

  const submitHandler = (data: FibonacciInput) => {
    onSubmit(data.n)
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="n">Insert value n:</label>
        <input id="n" {...register('n')} />
        {errors.n && <p style={{ color: 'red' }}>{errors.n.message}</p>}
      </div>
      <button type="submit">Get the Fibonacci number</button>
    </form>
  )
}

export default FibonacciForm
