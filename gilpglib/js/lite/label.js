import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {Object} HTMLLabelElementOnly
 * @property {string | Signal<string>} [htmlFor] Sets or retrieves the object to which the given label object is assigned.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement/htmlFor)
 */

/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLLabelElement> & HTMLLabelElementOnly
 *                                                 } HTMLLabelElementProperties
 */
 /**
  * Gives access to properties specific to <label> elements. It inherits methods and properties from the base HTMLElement interface.
  *
  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)
  * @param {import("./parameter/LiteElementParameter.js").
  *      LiteElementParameter<HTMLLabelElement, HTMLLabelElementProperties>[]
  *                                                                   } contents
  */
export function label(...contents) {
 return _(document.createElement("label"), ...contents)
}