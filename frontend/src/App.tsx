import { useState } from 'react'

import './App.css'
import FibonacciForm from './components/FibonacciForm'
import ResultDisplay from './components/ResultDisplay'
import { getFibonacciNumber } from './services/api'

function App() {
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleFormSubmit = async (n: number) => {
    setLoading(true)
    setResult(null)
    setError(null)

    try {
      const fibNumber = await getFibonacciNumber(n)
      setResult(fibNumber)
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error)
      } else {
        setError(
          'There was an unknown error during the calculation. Please try again later'
        )
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1>Fibonacci Calculator</h1>
      <FibonacciForm onSubmit={handleFormSubmit} />
      {loading && <p>Loading...</p>}
      <ResultDisplay result={result} error={error} />
    </>
  )
}

export default App
