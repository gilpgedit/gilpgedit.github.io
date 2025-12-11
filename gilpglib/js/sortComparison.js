/**
 * @template {number|string|Date|null} T
 * @param {T} v1
 * @param {T} v2
 */
export function sortComparison(v1, v2) {
 if (v1 && v2) {
  if (v1 < v2) {
   return -1
  } else if (v2 < v1) {
   return 1
  } else {
   return 0
  }
 } else {
  return 0
 }
}