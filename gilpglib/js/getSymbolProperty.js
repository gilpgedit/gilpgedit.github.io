/**
 * @param {Object} object
 * @param {symbol} symbol
 */
export function getSymbolProperty(object, symbol) {
 let value = object[symbol]
 if (value === undefined) {
  const propertyName = symbol.description
  if (propertyName === undefined) {
   return undefined
  } else {
   return object[propertyName]
  }
 } else {
  return value
 }
}