export function maxDistance (movements: string): number {
  const directions: Record<string, number> = {
    '>': 0,
    '<': 0,
    '*': 0
  }

  for (const char of movements) directions[char] += 1

  return Math.abs(directions['>'] - directions['<']) + directions['*']
}
