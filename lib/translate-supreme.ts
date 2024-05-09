const purrKeywords = [
  'love',
  'amo',
  'ami',
  'ama',
  'coccole',
  'tesoro',
  'cucci',
  'amore',
  'canna',
]

export const translateSupreme = (message: string): string => {
  let splittedText = message.split(' ')
  if (splittedText.length > 2) {
    splittedText = splittedText.filter((word: string, index: any) => {
      if (word.trim() == '') {
        return false
      }
      if (purrKeywords.includes(word)) {
        return true
      }
      if (index % 3 == 0) {
        return true
      }
      return false
    })
  }
  return splittedText
    .map((word: string) => {
      return translateWord(word)
    })
    .join(' ')
}

const translateWord = (word: string): string => {
  word = word.trim()
  if (!word) {
    return ''
  }
  if (purrKeywords.includes(word)) {
    return 'prrrr'
  }
  if (word.length < 4) {
    return 'mia'
  }
  return 'miao'
}
