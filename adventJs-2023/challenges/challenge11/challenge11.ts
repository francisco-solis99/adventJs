export function getIndexsForPalindrome (word: string): number[] | null {
  const wordArr: string[] = word.split('')

  if ([...wordArr].reverse().join('') === word) return []

  for (let i = 0; i < word.length - 1; i += 1) {
    const temp: string = wordArr[i]
    for (let j = i + 1; j < word.length; j += 1) {
      const copy: string[] = [...wordArr]
      copy[i] = copy[j]
      copy[j] = temp

      if (copy.join('') === copy.reverse().join('')) return [i, j]
    }
  }

  return null
}
