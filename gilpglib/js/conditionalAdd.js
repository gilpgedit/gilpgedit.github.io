/**
 * @param {{[x: string]: any;}} object
 * @param {string} property
 * @param {string} subproperty
 * @param {any} value
 * @param {boolean} bye
 */
export function conditionalAdd(object, property, subproperty, value
 , bye = false) {
 if (typeof value === "number") {
  if (!isNaN(value)) {
   addProperty(object, property, subproperty, value)
  } else if (bye) {
   deleteProperty(property, object, subproperty)
  }
 } else if (value) {
  addProperty(object, property, subproperty, value)
 } else if (bye) {
  deleteProperty(property, object, subproperty)
 }
}

/**
 * @param {{[x: string]: any;}} object
 * @param {string} property
 * @param {string} subproperty
 * @param {any} value
 */
function addProperty(object, property, subproperty, value) {
 if (!(property in object)) {
  object[property] = {}
 }
 object[property][subproperty] = value
}

/**
 * @param {string} property
 * @param {{ [x: string]: any; }} object
 * @param {string} subproperty
 */
function deleteProperty(property, object, subproperty) {
 if (property in object && subproperty in object[property]) {
  delete object[property][subproperty]
 }
 if (Object.getOwnPropertyNames(object[property]).length === 0) {
  delete object[property]
 }
}