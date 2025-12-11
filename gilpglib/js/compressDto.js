/**
 * @template {{ [s: string]: any }} ObjectType
 * @param {ObjectType} object
 */
export function compressDto(object) {
 for (let i = 0, entries = Object.entries(object), len = entries.length;
  i < len; i++) {
  const [property, value] = entries[i]
  if (typeof value === "number") {
   if (isNaN(value)) {
    delete object[property]
   }
  } else if (!Array.isArray(value) && typeof value !== "boolean" && !value) {
   delete object[property]
  }
 }
 return object
}