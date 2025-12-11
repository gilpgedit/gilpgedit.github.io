/**
 * @param {string | undefined} propertyName
 */
export function functionListInvalidTemplate(propertyName) {
 return `La propiedad ${propertyName} debe ser, función o, un array de ` +
  " funciones."
}