import {
 textWithAccessKeyTemplate
} from "../i18n/template/textWithAccessKeyTemplate.js"

/**
 * @param {{accessKey: string, accessKeyLabel: string}} element
 * @param {string} text
 * @param {string} accessKey
 */
export function elementTextWithAccessKey(element, text, accessKey) {
 if (accessKey) {
  element.accessKey = accessKey
  return textWithAccessKeyTemplate(text, element.accessKeyLabel,
   element.accessKey)
 } else {
  return text
 }
}