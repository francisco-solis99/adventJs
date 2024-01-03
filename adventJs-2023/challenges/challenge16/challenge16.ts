
interface Tree {
  value: number
  left: object | null
  right: object | null
}

export function transformTree (tree: number[]): object | null {
  const treeObj: Tree[] = tree.map((value) => ({ value, left: null, right: null }))

  type Directions = 'right' | 'left'
  const dir: Directions[] = ['right', 'left']
  for (let i = 1; i < tree.length; i++) {
    if (treeObj[i].value == null) continue
    const index = (i - 1) / 2 | 0
    treeObj[index][dir[i % 2]] = treeObj[i]
  }

  return treeObj[0] ?? null
}
