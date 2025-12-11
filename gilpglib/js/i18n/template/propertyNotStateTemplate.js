/**
 * @param {string | undefined} source
 * @param {string | undefined} propertyName
 */
export function propertyNotStateTemplate(source, propertyName) {
 return `La propiedad ${source}[${propertyName}] no es un State.`
}