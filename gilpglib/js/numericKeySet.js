import { setNew } from "./di/setNew.js"

/**
 * @param {number} n
 * @returns {Set<string>}
 */
export function numericKeySet(n) {
 return isNaN(n) ? setNew() : setNew([n.toString()])
}