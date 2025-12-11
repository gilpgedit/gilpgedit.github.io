/**
 * @param {Date|null|undefined} date
 */
export function dateTemplate(date) {
 return date === null || date === undefined ?
  ""
  : date.toLocaleDateString([], { timeZone: 'UTC' })
}