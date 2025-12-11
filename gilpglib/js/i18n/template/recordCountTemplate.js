/**
 * @param {number} count
 * @param {boolean} addTheOrMoreText
 */
export function recordCountTemplate(count, addTheOrMoreText) {
 if (addTheOrMoreText) {
  return count === 1 ? "1 registro o más" : `${count} registros o más`
 } else {
  return count === 1 ? "1 registro" : `${count} registros`
 }
}