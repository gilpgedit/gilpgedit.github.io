import { accessKeyTipTemplate } from "../i18n/template/accessKeyTipTemplate.js"

/**
 * @param {string} accessKeyValue
 * @param {HTMLElement} targetElement
 * @param {HTMLSpanElement} displayElement
 */
export function setAccessKey(accessKeyValue, targetElement, displayElement) {
 if (accessKeyValue) {
  targetElement.accessKey = accessKeyValue
  displayElement.textContent = accessKeyTipTemplate(
   targetElement.accessKeyLabel, targetElement.accessKey)
 } else {
  targetElement.accessKey = ""
  displayElement.textContent = ""
 }
}