export function organizeGifts (gifts: string): string {
  const giftsArr = gifts.matchAll(/(\d+)([a-z])/g)
  let warehouse = ''

  for (const gift of giftsArr) {
    let acum = Number(gift[1])
    const type = gift[2]

    const numPallets = (acum - (acum % 50)) / 50
    acum -= 50 * numPallets
    const numBoxes = (acum - (acum % 10)) / 10
    acum -= 10 * numBoxes

    const pallets = `[${type}]`.repeat(numPallets)
    const boxes = `{${type}}`.repeat(numBoxes)

    warehouse += `${pallets}${boxes}`

    if (acum > 0) {
      const bags = `(${type.repeat(acum)})`
      warehouse += bags
    }
  }

  return warehouse
}
