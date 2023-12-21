function findFirstRepeated(gifts: number[]): number {

  const seen: Record<number, boolean> = {}
  for (const id of gifts) {
    if (seen[id]) return id;
    seen[id] = true;
  }
  return -1;
}


const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3