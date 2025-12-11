/**
 * @param {string} s
 * @param {number} length
 */
export function stringTrunkWithEllipsis(s, length) {
 return s.length > length ? s.substring(0, length) + "…" : s
}