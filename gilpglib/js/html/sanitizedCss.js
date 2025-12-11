import { cssText_property } from "../const/cssText_property.js"

/**
 * @param {string} text 
 * @returns {import("./CssText.js").CssText}
 */
export function sanitizedCss(text) {
 return { [cssText_property]: text }
}