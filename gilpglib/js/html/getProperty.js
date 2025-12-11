import { getName } from "./getName.js"

/**
 * @param {HTMLElement | Document} view
 * @param {string} elementName
 * @param {string} propertyName
 */
export function getProperty(view, elementName, propertyName) {
 const element = getName(view, elementName)
 return element ? element[propertyName] : undefined
}