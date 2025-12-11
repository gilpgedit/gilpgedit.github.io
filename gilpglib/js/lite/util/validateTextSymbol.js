/**
 * @param {symbol} propertySymbol
 * @param {(() => string)} textSymbolUndefinedFuntion
 * @param {(() => string)} textSymbolEmptyFuntion
 */
export function validateTextSymbol(propertySymbol
 , textSymbolUndefinedFuntion, textSymbolEmptyFuntion) {
 const propertyName = propertySymbol.description
 if (propertyName === undefined)
  throw new Error(textSymbolUndefinedFuntion())
 if (!propertyName) throw new Error(textSymbolEmptyFuntion())
 return propertyName
}