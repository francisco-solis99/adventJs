export function createChristmasTree (ornaments: string, height: number): string {
  const numTriangular: number = (height * (height + 1)) / 2
  const times: number = Math.ceil(numTriangular / ornaments.length)
  const allOrnaments: string[] = ornaments.repeat(times).slice(0, numTriangular).split('')
  let tree: string = ''

  for (let i = 0; i < height; i += 1) {
    const ornamentsRow: string[] = allOrnaments.splice(0, i + 1)
    const row: string = ornamentsRow.join(' ').padStart(height + i, ' ')
    tree += `${row}\n`
  }
  tree += '|'.padStart(height) + '\n'
  return tree
}
