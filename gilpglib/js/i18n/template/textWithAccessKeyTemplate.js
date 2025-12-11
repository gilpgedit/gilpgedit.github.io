import { accessKeyTipTemplate } from "./accessKeyTipTemplate.js"

/**
 * @param {string} text
 * @param {string} accessKeyLabel
 * @param {string} accessKey
 */
export function textWithAccessKeyTemplate(text, accessKeyLabel, accessKey) {
 return text.trim() + accessKeyTipTemplate(accessKeyLabel, accessKey)
}