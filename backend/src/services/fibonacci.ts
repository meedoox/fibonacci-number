import cache from '../utils/cache'

export const getFibonacciNumber = (n: number): bigint => {
  if (cache.has(n)) {
    return cache.get(n)!
  }

  let a = BigInt(0)
  let b = BigInt(1)

  cache.set(0, a)
  cache.set(1, b)

  for (let i = 2; i <= n; i++) {
    const temp = a + b
    a = b
    b = temp
    cache.set(i, b)
  }

  return cache.get(n)!
}
