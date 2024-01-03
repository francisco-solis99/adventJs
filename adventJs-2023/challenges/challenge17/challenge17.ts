export function optimizeIntervals (intervals: number[][]): number[][] {
  intervals.sort((intA, intB) => intA[0] - intB[0])
  const optimizedIntervals = [intervals[0]]

  for (const [start, end] of intervals.slice(1)) {
    const last: number[] = optimizedIntervals.at(-1) ?? []
    if (start > last[1]) {
      optimizedIntervals.push([start, end])
      continue
    }
    last[1] = Math.max(end, last[1])
  }

  return optimizedIntervals
}
