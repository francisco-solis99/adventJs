export function findNaughtyStep (original: string, modified: string): string | undefined {
  if (original === modified) return ''

  let longest; let shortest = ''
  if (original.length > modified.length) {
    longest = original
    shortest = modified
  } else {
    longest = modified
    shortest = original
  }

  return [...longest].find((letter, index) => letter !== shortest[index])
}
