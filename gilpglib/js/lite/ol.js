import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {object} HTMLOListElementOnly
 * @property {boolean | Signal<boolean>} [reversed] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOListElement/reversed)
 * @property {number | Signal<number>} [start] The starting number.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOListElement/start)
 * @property {string | Signal<string>} [type] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOListElement/type
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLOListElement> & HTMLOListElementOnly
 *                                                 } HTMLOListElementProperties
 */
/**
 * Provides special properties (beyond those defined on the regular HTMLElement interface it also has available to it by inheritance) for manipulating ordered list elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOListElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLOListElement, HTMLOListElementProperties>[]
 *                                                                   } contents
 */
export function ol(...contents) {
 return _(document.createElement("ol"), ...contents)
}