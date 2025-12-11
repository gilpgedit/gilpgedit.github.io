import { SPACE } from "../const/SPACE.js"
import { up } from "../up.js"

/**
 * @param {string} filter
 * @param {number} maxLength
 */
export function filterPrepare(filter, maxLength) {
 const words = up(filter).split(SPACE)
 if (words.length > maxLength) {
  words.splice(-1, words.length - maxLength)
 }
 return words
}
