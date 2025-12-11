import { SPACE } from "./const/SPACE.js"

/**
 * Replaces any space like character sequence by a single space.
 * @param {string} text text to be processed.
 * @returns {string} processed text.
 */
export function spacesCollapse(text) {
 return text.trim().replace(/(\s+)/g, SPACE)
}