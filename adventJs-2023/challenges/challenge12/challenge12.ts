export function checkIsValidCopy (original: string, copy: string): boolean {
  const replaced: string = copy.replace(/[#+:.\s]/g, (match, index) => {
    if (match === original[index]) return ' '
    if (original[index] === ' ') return match
    return original[index]
  })
  if (replaced === copy) return copy === original
  return replaced.toLowerCase() === original.toLowerCase()
}
