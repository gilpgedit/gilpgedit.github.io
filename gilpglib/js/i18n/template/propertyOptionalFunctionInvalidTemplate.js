/**
 * @param {symbol} source
 * @param {symbol} symbolProperty
 */
export function propertyOptionalFunctionInvalidTemplate(source
 , symbolProperty) {
 return `La propiedad ${source.description}[${symbolProperty.description
  }] no es ni undefined ni función.`
}
