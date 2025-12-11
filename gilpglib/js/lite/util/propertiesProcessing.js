/**
 * @param {{ [s: string]: any; } | ArrayLike<any>} content
 * @param {(propertyName: string, propertyValue: any) => any} processingFunction
 */
export function propertiesProcessing(content, processingFunction) {
 for (let properties = Object.entries(content), p = 0, pLen = properties.length
  ; p < pLen; p++) {
  const [propertyName, propertyValue] = properties[p]
  processingFunction(propertyName, propertyValue)
 }
}