/**
 * @param {symbol} source
 * @param {string} propertyName
 */
export function stateListenerInvalidTemplate(source, propertyName) {
 return `La propiedad ${source.description}[${propertyName
  }] debe ser un State o una función.`
}