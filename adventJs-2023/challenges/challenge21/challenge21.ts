export function findBalancedSegment (message: number[]): number[] {
  let range: number = 0
  let minIndex: number = -1

  for (let i = 0; i < message.length; i += 1) {
    let count0: number = 0; let count1: number = 0
    for (let j = i; j < message.length; j += 1) {
      message[j] === 0 ? count0 += 1 : count1 += 1
      if ((count1 === count0) && ((j - i) > range)) {
        range = j - i
        minIndex = i
      }
    }
  }

  return minIndex < 0 ? [] : [minIndex, range + minIndex]
}
