/**
 * @template {{ [s: string]: any }} ObjectType
 * @param {ObjectType} object
 */
export function compressView(object) {
 for (let i = 0, entries = Object.entries(object), len = entries.length;
  i < len; i++) {
  const [property, value] = entries[i]
  switch (typeof value) {
   case "number":
    if (isNaN(value)) {
     delete object[property]
    }
    continue
   case "boolean":
    continue
   case "string":
    if (!value) {
     delete object[property]
    }
    continue
   case "undefined":
    delete object[property]
    continue
   default:
    if (value === null) {
     delete object[property]
    } else if (!Array.isArray(value)) {
     compressView(value)
     if (!Object.getOwnPropertyNames(value).length) {
      delete object[property]
     }
    }
    continue
  }
 }
 return object
}