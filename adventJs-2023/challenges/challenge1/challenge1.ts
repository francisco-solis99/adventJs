export function findFirstRepeated (gifts: number[]): number {
  const seen: Record<number, boolean> = {}

  for (const id of gifts) {
    if (seen[id]) return id
    seen[id] = true
  }
  return -1
}
