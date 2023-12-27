export function decode (message: string): string {
  let formatedMessage = message
  let match = null

  while ((match = formatedMessage.match(/\(([^()]+)\)/g)) != null) {
    const sanitized = match[0].slice(1, -1).split('').reverse().join('')
    formatedMessage = formatedMessage.replace(match[0], sanitized)
  }

  return formatedMessage
}
