export function travelDistance (map: string): number {
  const mapArr: string[] = map.split('\n')
  const mapCoords: any[] = []

  // eslint-disable-next-line @typescript-eslint/no-for-in-array
  for (const row in mapArr) {
    const chunk = mapArr[row]
    const cols: any[] = [...mapArr[row].matchAll(/[1-9]|S/g)].map(match => match.index)
    if (cols.length === 0) continue
    cols.forEach((col: number) => mapCoords.push([chunk[col], [row, col]]))
  }

  mapCoords.sort((a: any, b: any) => a[0].localeCompare(b[0]))
  const beginPoint = mapCoords.pop()
  mapCoords.unshift(beginPoint)

  let moves = 0
  for (let i = 0; i < mapCoords.length - 1; i += 1) {
    const diff1 = Math.abs(mapCoords[i][1][0] - mapCoords[i + 1][1][0])
    const diff2 = Math.abs(mapCoords[i][1][1] - mapCoords[i + 1][1][1])
    moves += (diff1 + diff2)
  }

  return moves
}
