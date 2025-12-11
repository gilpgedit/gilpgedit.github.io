import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {Object} HTMLLIElementOnly
 * @property {number | Signal<number>} [value] Sets or retrieves the value of a list item
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLLIElement> & HTMLLIElementOnly
 *                                                    } HTMLLIElementProperties
 */
/**
 * Exposes specific properties and methods (beyond those defined by regular HTMLElement interface it also has available to it by inheritance) for manipulating list elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLIElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLLIElement, HTMLLIElementProperties>[]
 *                                                                   } contents
 */
export function li(...contents) {
 return _(document.createElement("li"), ...contents)
}