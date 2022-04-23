import { vw } from "./useScrollPosition";

const getMaxChar = (range?: number[]) => {
  const wordCount = range ?? [105, 255, 355, 305, 355]

  if (vw < 600) {
    return wordCount[0]
  } else if (vw < 960) {
    return wordCount[1]
  } else if (vw < 1200) {
    return wordCount[2]
  } else if (vw < 1400) {
    return wordCount[3]
  } else {
    return wordCount[4]
  }
}

export const modifyDescription = (description: string, range?: number[]) => {
  const maxChars = getMaxChar(range)

  if (description.length > maxChars) {
    const newDescription = description.slice(0, (maxChars - 5)) + ' ...'
    return newDescription
  } else {
    return description
  };

};