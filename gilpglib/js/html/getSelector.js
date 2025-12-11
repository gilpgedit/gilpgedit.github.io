import { cantfindTemplate } from "../i18n/template/cantfindTemplate.js"

/**
 * @template {Element} ElementType
 * @param {Document | HTMLElement | ShadowRoot} htmlRoot
 * @param {string} selector
 */
export function getSelector(htmlRoot, selector) {
 /**
  * @type {ElementType | null}
  */
 const htmlElement = htmlRoot.querySelector(selector)
 if (htmlElement === null) {
  throw new Error(cantfindTemplate(selector))
 } else {
  return htmlElement
 }
}