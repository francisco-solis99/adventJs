export function calculateTime (deliveries: string[]): string {
  const LIMIT_SECONDS: number = 7 * 3600

  const totalTimeSeconds: number = deliveries.reduce((acum, delivery) => {
    const [hours, minutes, seconds] = delivery.split(':').map(Number)
    return acum + (hours * 3600) + (minutes * 60) + seconds
  }, 0)

  const sign: string = ['', '-'][+(totalTimeSeconds < LIMIT_SECONDS)]
  const diff: number = Math.abs(totalTimeSeconds - LIMIT_SECONDS)

  const hours: string = Math.floor(diff / 3600).toString().padStart(2, '0')
  const minutes: string = Math.floor((diff % 3600) / 60).toString().padStart(2, '0')
  const seconds: string = (diff % 60).toString().padStart(2, '0')

  return `${sign}${hours}:${minutes}:${seconds}`
}
