import React from 'react'

type Props = {
  result: string | null
  error: string | null
}

const ResultDisplay: React.FC<Props> = ({ result, error }) => {
  return (
    <div>
      {result && (
        <div>
          <h2>Result:</h2>
          <p style={{ wordWrap: 'break-word' }}>{result}</p>
        </div>
      )}
      {error && (
        <div>
          <h2>Error:</h2>
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      )}
    </div>
  )
}

export default ResultDisplay
