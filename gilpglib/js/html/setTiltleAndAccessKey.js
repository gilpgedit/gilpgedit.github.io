import { elementTextWithAccessKey } from "./elementTextWithAccessKey.js"

/**
 * @param {{
 *   title: string, accessKey: string, accessKeyLabel: string
 *  }} element
 * @param {string} title
 * @param {string} accessKey
 */
export function setTiltleAndAccessKey(element, title, accessKey) {
 if (accessKey) {
  element.title = elementTextWithAccessKey(element, title, accessKey)
 }
}