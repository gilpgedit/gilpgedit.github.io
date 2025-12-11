/**
 * Encodes a value, so special escape characters can't be interpreted as HTML.
 * This technique avoids code injection.
 * @param {string} value
 * @returns {string} a text that can't be interpreted as HTML.
 */
export function htmlentities(value) {
 return value.replace(/[<>"']/g, letra => {
  switch (letra) {
   case "<": return "&lt;"
   case ">": return "&gt;"
   case '"': return "&quot;"
   case "'": return "&#039;"
   default: return letra
  }
 })
}