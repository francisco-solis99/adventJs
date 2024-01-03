export function autonomousDrive (store: string[], movements: string[]): string[] {
  let y: number = store.findIndex(item => item.includes('!'))
  let x: number = 0
  const storeMatrix: string[][] = store.map(arr => [...arr])
  const initialXindex: number = store[y].indexOf('!')
  x = initialXindex

  storeMatrix[y][x] = '.'

  const MOVS: Record<string, number[]> = {
    R: [0, 1],
    L: [0, -1],
    D: [1, 0],
    U: [-1, 0]
  }

  for (const movement of movements) {
    const [yNew, xNew] = MOVS[movement]
    // const isValid = storeMatrix[y + yNew] && storeMatrix[y][x + xNew]
    if (storeMatrix[y + yNew]?.[x + xNew] === '.') {
      x += xNew
      y += yNew
    }
  }

  storeMatrix[y][x] = '!'
  return storeMatrix.map(store => store.join(''))
}
