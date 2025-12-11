import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {Object} HTMLProgressElementOnly
 * @property {number | Signal<number>} [max] Defines the maximum, or "done" value for a progress element.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLProgressElement/max)
 * @property {number | Signal<number>} [value] Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLProgressElement/value)
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLProgressElement> & HTMLProgressElementOnly
 *                                              } HTMLProgressElementProperties
 */
/**
 * Provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of <progress> elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLProgressElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *  LiteElementParameter<HTMLProgressElement, HTMLProgressElementProperties>[]
 *                                                                   } contents
 */
export function progress(...contents) {
 return _(document.createElement("progress"), ...contents)
}