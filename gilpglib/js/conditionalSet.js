/**
 * @param {{ [x: string]: any; }} object
 * @param {string} property
 * @param {any} value
 * @param {boolean} bye
 */
export function conditionalSet(object, property, value, bye = false) {
 if (typeof value === "number") {
  if (!isNaN(value)) {
   object[property] = value
  } else if (bye && property in object) {
   delete object[property]
  }
 } else if (value) {
  object[property] = value
 } else if (bye && property in object) {
  delete object[property]
 }
}