/**
 * @param {string | undefined} propertyName
 */
export function propertyListInvalidTemplate(propertyName) {
 return `La propiedad ${propertyName} debe ser, string o, un array de ` +
  " string o symbol que representan propiedades del elemento HTNL."
}