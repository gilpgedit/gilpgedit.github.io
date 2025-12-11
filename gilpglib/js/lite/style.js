import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {Object} StyleSheetProperties
 * @property {boolean | Signal<boolean>} [disabled] [MDN Reference](https://developer.mozilla.org/docs/Web/API/StyleSheet/disabled)
 */
/**
 * @typedef {Object} LinkStyleProperties
 * @property {StyleSheetProperties | null} [sheet] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement/sheet)
 */
/**
 * @typedef {Object} HTMLStyleElementOnly
 * @property {boolean | Signal<boolean>} [disabled] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLStyleElement/disabled)
 * @property {string | Signal<string>} [media] Sets or retrieves the media type.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLStyleElement/media)
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLStyleElement> & HTMLStyleElementOnly
 *                                              } HTMLStyleElementProperties
 */
/**
 * A <style> element. It inherits properties and methods from its parent, HTMLElement, and from LinkStyle.
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLStyleElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *  LiteElementParameter<HTMLStyleElement, HTMLStyleElementProperties>[]
 *                                                                   } contents
 */
export function style(...contents) {
 return _(document.createElement("style"), ...contents)
}