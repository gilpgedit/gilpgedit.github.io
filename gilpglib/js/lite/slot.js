import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {Object} HTMLSlotElementOnly
 * @property {string | Signal<string>} [name] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/name)
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLSlotElement> & HTMLSlotElementOnly
 *                                              } HTMLSlotElementProperties
 */
/**
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *  LiteElementParameter<HTMLSlotElement, HTMLSlotElementProperties>[]
 *                                                                   } contents
 */
export function slot(...contents) {
 return _(document.createElement("slot"), ...contents)
}