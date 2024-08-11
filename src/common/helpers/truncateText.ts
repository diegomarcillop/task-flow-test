export const truncateText = (text: string, maxChars: number) => {
  return text.slice(0, maxChars) + '...'
}
