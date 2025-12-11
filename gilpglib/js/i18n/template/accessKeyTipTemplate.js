import { APPLE_IS } from "../../const/APPLE_IS.js"

/**
 * @param {string} accessKeyLabel
 * @param {string} accessKey
 */
export function accessKeyTipTemplate(accessKeyLabel, accessKey) {
 accessKey = accessKey.toUpperCase()
 if (accessKeyLabel) {
  return ` [${accessKeyLabel.toUpperCase()}]`
 } else if (accessKey) {
  return APPLE_IS ? ` [CMD+${accessKey}]` : ` [ALT+${accessKey}]`
 } else {
  return ""
 }
}