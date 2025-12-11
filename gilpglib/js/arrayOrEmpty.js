/**
 * @template Type
 * @param {Type[] | null | undefined} x
 */
export function arrayOrEmpty(x) {
 return Array.isArray(x) ? x : []
}