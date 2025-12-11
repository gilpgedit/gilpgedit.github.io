import { innerHTML_property } from "../const/innerHTML_property.js"

/**
 * @param {string} text 
 * @returns {import("./HtmlText.js").HtmlText}
 */
export function sanitizedHtml(text) {
 return { [innerHTML_property]: text }
}