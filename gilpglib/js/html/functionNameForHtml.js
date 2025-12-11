/**
 * @param {function} value
 */
export function functionNameForHtml(value) {
 const names = value.name.split(/\s+/g)
 return names[names.length - 1]
}
