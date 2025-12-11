/**
 * @param {string | undefined} propertyName
 */
export function classListInvalidTemplate(propertyName) {
 return `La propiedad ${propertyName} debe ser, string o, un array de ` +
  " string o symbol que representan clases de CSS o una señal que represente" +
  " un string o  un array de  string o symbol que representan clases de CSS."
}