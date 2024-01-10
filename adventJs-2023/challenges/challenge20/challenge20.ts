export function distributeGifts (weights: number[][]): number[][] {
  const neightbors: number[][] = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0]
  ]

  return weights.map((row, i) => {
    return row.map((cell, j) => {
      let sum: number = cell ?? 0
      let divideBy: number = sum > 0 ? 1 : 0
      for (const [y, x] of neightbors) {
        if (weights[i + y]?.[j + x] > 0) {
          sum += weights[i + y][j + x]
          divideBy += 1
        }
      }
      return Math.round(sum / divideBy)
    })
  })
}
