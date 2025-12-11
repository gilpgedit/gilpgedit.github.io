import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {Object} HTMLDetailsElementOnly
 * @property {boolean | Signal<boolean>} [name] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/name)
 * @property {boolean | Signal<boolean>} [open] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/open)
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLDetailsElement> & HTMLDetailsElementOnly
 *                                               } HTMLDetailsElementProperties
 */
/**
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLDetailsElement, HTMLDetailsElementProperties>[]
 *                                                                   } contents
 */
export function details(...contents) {
 return _(document.createElement("details"), ...contents)
}