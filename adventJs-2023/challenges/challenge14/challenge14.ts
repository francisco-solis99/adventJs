export function maxGifts (houses: number[]): number {
  const n: number = houses.length
  const dp: number[] = houses.slice(0, 2)

  for (let i = 2; i < n; i += 1) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i])
  }

  return dp[n - 1]
}
