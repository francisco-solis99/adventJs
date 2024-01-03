export function revealSabotage (store: string[][]): string[][] {
  const adjacent: number[][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]

  return store.map((row, indexI) => {
    return row.map((cell, indexJ) => {
      if (cell === '*') return cell

      let count = 0

      adjacent.forEach(([y, x]) => {
        if (store[indexI + y]?.[indexJ + x] === '*') count += 1
      })

      return count > 0 ? count.toString() : cell
    })
  })
}
