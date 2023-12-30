export function drawGift (size: number, symbol: string): string {
  if (size <= 1) return '#\n'

  const rows: string[] = []
  const tape: string = '#'.repeat(size)
  const numFaces: number = size - 2
  const maxlen: number = size * 2 - 1

  for (let i: number = 0; i < size - 1; i += 1) {
    const part1: string = i !== 0 ? symbol.repeat(numFaces) : '#'.repeat(numFaces)
    const row: string = `#${part1}#${symbol.repeat(Math.abs(numFaces - i))}#`
    rows.push(row)
    if (i > 0) rows.unshift(row.padStart(maxlen, ' '))
  }

  const gift: string[] = [tape.padStart(maxlen, ' '), ...rows, tape]

  return gift.join('\n') + '\n'
}
