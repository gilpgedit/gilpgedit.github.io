import { nameSelector } from "./nameSelector.js"

/**
 * @template {Element} ElementType
 * @param {Document | HTMLElement} htmlRoot
 * @param {string} name
 */
export function getName(htmlRoot, name) {
 /**
  * @type {ElementType | null}
  */
 const htmlElement = htmlRoot.querySelector(nameSelector(name))
 return htmlElement
}