import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getFibonacciNumber = async (n: number): Promise<string> => {
  const response = await axios.get(`${API_BASE_URL}/fibonacci/${n}`)

  return response.data.result
}
