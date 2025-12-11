/**
 * @template Type
 * @param {Type} value
 * @param {Type} defaultValue
 * @returns {Type}
 */
export function $$(value, defaultValue) {
 return (value === null || value === undefined) ? defaultValue : value
}