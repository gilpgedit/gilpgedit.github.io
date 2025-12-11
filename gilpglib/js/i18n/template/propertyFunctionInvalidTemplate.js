/**
 * @param {string | undefined} source
 * @param {string | undefined} symbolProperty
 */
export function propertyFunctionInvalidTemplate(source, symbolProperty) {
 return `La propiedad ${source}[${symbolProperty}] no es una función.`
}
