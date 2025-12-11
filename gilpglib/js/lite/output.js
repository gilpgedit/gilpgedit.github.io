import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {object} HTMLOutputElementOnly
 * @property {string | Signal<string>} [defaultValue]
 * @property {string | Signal<string>} [name] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/name)
 * @property {string | Signal<string>} [value] Returns the element's current value.
 *           Can be set, to change the value.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/value)
 */

/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLOutputElement> & HTMLOutputElementOnly
 *                                               } HTMLOutputEElementProperties
 */
/**
 * Provides properties and methods (beyond those inherited from HTMLElement) for manipulating the layout and presentation of <output> elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *   LiteElementParameter<HTMLOutputElement, HTMLOutputEElementProperties>[]
 *                                                                   } contents
 */
export function output(...contents) {
 return _(document.createElement("output"), ...contents)
}