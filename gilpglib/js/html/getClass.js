import { classSelector } from "./classSelector.js"
import { getSelector } from "./getSelector.js"

/**
 * @template {Element} ElementType
 * @param {Document | HTMLElement | ShadowRoot} htmlRoot
 * @param {string} className
 */
export function getClass(htmlRoot, className) {
 /**
  * @type {ElementType}
  */
 const htmlElement = getSelector(htmlRoot, classSelector(className))
 return htmlElement
}