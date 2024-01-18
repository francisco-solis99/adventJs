export function getStaircasePaths (steps: number, maxJump: number): number[][] {
  const results: number[][] = []

  function findPaths (currentPath: number[]): void {
    const currentSum = currentPath.reduce((acc, step) => acc + step, 0)

    if (currentSum === steps) {
      results.push(currentPath)
      return
    }

    if (currentSum > steps) {
      return
    }

    for (let i = 1; i <= maxJump; i++) {
      findPaths([...currentPath, i])
    }
  }

  findPaths([])
  return results
}
