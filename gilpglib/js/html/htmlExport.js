import { functionNameForHtml } from "./functionNameForHtml.js"

/**
 * @param {function} functionInstance
 */
export function htmlExport(functionInstance) {
 window[functionNameForHtml(functionInstance)] = functionInstance
}