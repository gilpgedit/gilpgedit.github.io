/**
 * @param {HTMLFormElement} form
 * @param {string} name
 */
export function formElement(form, name) {
 const htmlElement = form.elements.namedItem(name)
 if (htmlElement === null) {
  throw new Error(`${name} not in ${form.id || form.name || "form"}`)
 } else if (htmlElement instanceof RadioNodeList) {
  throw new Error(`${name} is RadioNodeList`)
 } else {
  return htmlElement
 }
}