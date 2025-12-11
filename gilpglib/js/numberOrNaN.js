/**
 * @param {any} x
 */
export function numberOrNaN(x) {
 return typeof x === "number" ? x : NaN
}