import { setNew } from "./di/setNew.js"

/**
 * @template T
 * @param {Set<T>} s1
 * @param {Set<T>} s2
 */
export function intersect(s1, s2) {
 return setNew(Array.from(s1).filter(e => s2.has(e)))
}