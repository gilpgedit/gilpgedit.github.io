/**
 * @param {string} source
 * @param {string} symbolProperty
 */
export function propertyNotArrayInvalidTemplate(source, symbolProperty) {
 return `La propiedad ${source}[${symbolProperty}] no es un array.`
}
