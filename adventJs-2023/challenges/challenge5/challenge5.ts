export function cyberReindeer (road: string, time: number): string[] {
  // Code here
  let copyRoad: string = road

  const snapshots = [road]
  let lastChar = '.'

  for (let i = 1; i < time; i += 1) {
    if (i === 5) copyRoad = copyRoad.replaceAll('|', '*')

    const matches = copyRoad.match(/S[.*]/g)

    if (matches != null) {
      copyRoad = copyRoad.replace(matches[0], lastChar + 'S')
      lastChar = matches[0][1]
    }

    snapshots.push(copyRoad)
  }

  return snapshots
}
