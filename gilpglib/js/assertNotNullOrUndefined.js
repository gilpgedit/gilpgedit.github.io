/**
 * @template T
 * @param {T | null | undefined} reference
 * @param {string | undefined} message
 * @returns {T}
 */
export function assertNotNullOrUndefined(reference, message) {
 if (reference === null || reference === undefined) {
  throw new Error(message)
 } else {
  return reference
 }
}