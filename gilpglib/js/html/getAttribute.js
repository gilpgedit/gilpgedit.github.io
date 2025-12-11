/**
 * @param {Element} element
 * @param {string} attributeName
 */
export function getAttribute(element, attributeName) {
 return element.getAttribute(attributeName) || ""
}
