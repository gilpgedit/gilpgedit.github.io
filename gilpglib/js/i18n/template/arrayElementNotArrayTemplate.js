/**
 * @param {string | undefined} source
 * @param {number} i
 */
export function arrayElementNotArrayTemplate(source, i) {
 return `El elemento de ${source}[${i}] no es un arreglo.`
}