export function compile (code: string): number {
  if (code.length === 0) return 0

  const codeArr: string[] = [...code]
  let counter: number = 0

  const santaJs: Record<string, Function> = {
    '+': () => {
      counter += 1
    },
    '-': () => {
      counter -= 1
    },
    '*': () => {
      counter *= 2
    }
  }

  for (let i = 0; i < codeArr.length; i += 1) {
    if (codeArr[i] === '<') {
      const indexBackPoint = codeArr.lastIndexOf('%', i)
      codeArr[i] = '#'
      if (indexBackPoint !== -1) {
        codeArr[indexBackPoint] = '#'
        i = indexBackPoint
      }
      continue
    }

    if (codeArr[i] === '¿') {
      const closeConditionIndex = codeArr.indexOf('?', i)
      codeArr[i] = '#'
      codeArr[closeConditionIndex] = '#'
      if (counter <= 0) {
        codeArr.splice(i, closeConditionIndex - 1)
        i -= 1
      }
      continue
    }

    const action = santaJs[codeArr[i]]
    if (action !== undefined) action()
  }
  return counter
}
