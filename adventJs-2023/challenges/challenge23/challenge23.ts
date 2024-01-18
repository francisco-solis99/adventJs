export function organizeChristmasDinner (dishes: string[][]): string[][] {
  const dishesByIngredients: Record<string, string[]> = {}

  for (let i = 0; i < dishes.length; i += 1) {
    for (let j = 1; j < dishes[i].length; j += 1) {
      const ingredient = dishes[i][j]
      if (dishesByIngredients[ingredient] !== undefined) {
        dishesByIngredients[ingredient].push(dishes[i][0])
        continue
      }
      dishesByIngredients[ingredient] = [dishes[i][0]]
    }
  }

  const entriesIngredients = Object.entries(dishesByIngredients)
  // if(!entriesIngredients.length) return [];

  const dishesRepeated = entriesIngredients.filter(item => item[1].length > 1)

  const dishesOrder = dishesRepeated
    .map(([ingredient, dishes]) => {
      return [ingredient, dishes.sort()].flat()
    })

  return dishesOrder.sort((a: any, b: any) => a[0].localeCompare(b[0]))
}
