export function adjustLights (lights: string[]): number {
  let changes: number = 0
  type Lights = '🟢' | '🔴'
  const colors: Lights[] = ['🟢', '🔴']

  for (const [i, light] of lights.entries()) {
    if (light === colors[i % 2]) changes += 1
  }

  return Math.min(changes, lights.length - changes)
}
