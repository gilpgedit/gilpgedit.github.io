/**
 * @param {string | undefined} source
 * @param {string} propertyName
 */
export function stringDefinitionValueInvalidTemplate(source, propertyName) {
 return `El valor de la propiedad de ${source}[${propertyName
  }] debe ser string o señal de string.`
}