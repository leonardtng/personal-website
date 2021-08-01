import { vw } from "./useScrollPosition";

const getMaxChar = () => { 
  if (vw < 600) {
    return 105
  } else if (vw < 960) {
    return 255
  } else if (vw < 1200) {
    return 355
  } else if (vw < 1400) {
    return 305
  } else {
    return 355
  }
}

export const modifyDescription = (description: string) => {
  const maxChars = getMaxChar()

  if (description.length > maxChars) {
    const newDescription = description.slice(0, (maxChars - 5)) + ' ...'
    return newDescription
  } else {
    return description
  };

};