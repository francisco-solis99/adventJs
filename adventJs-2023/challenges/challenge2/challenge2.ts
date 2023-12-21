export function manufacture (gifts: string[], materials: string): string[] {
  const setMaterials = new Set(materials)
  return gifts.filter(gift => {
    return [...gift].every(letter => setMaterials.has(letter))
  })
}
