import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { FibonacciInput, fibonacciSchema } from '../schemas/fibonacci'

type Props = {
  onSubmit: (n: number) => void
  onValidationError: (error: string) => void
}

const FibonacciForm: React.FC<Props> = ({ onSubmit, onValidationError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FibonacciInput>({
    resolver: zodResolver(fibonacciSchema),
  })

  const handlerOnValid = (data: FibonacciInput) => {
    onSubmit(data.n)
  }

  const handlerOnInvalid = () => {
    if (errors.n) {
      onValidationError(errors.n.message || 'Invalid input');
    }
  }

  const submitValidation = handleSubmit(handlerOnValid, handlerOnInvalid)

  return (
    <form onSubmit={submitValidation}>
      <div>
        <label htmlFor="n">Insert value n: </label>
        <input id="n" {...register('n')} />
      </div>
      <button type="submit" style={{marginTop: '10px'}}>Get the Fibonacci number</button>
    </form>
  )
}

export default FibonacciForm