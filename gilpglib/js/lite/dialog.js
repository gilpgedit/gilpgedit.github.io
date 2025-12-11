import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {Object} HTMLDialogElementOnly
 * @property {boolean | Signal<boolean>} [open] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/open)
 * @property {string | Signal<string>} [returnValue] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/returnValue)
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLDialogElement> & HTMLDialogElementOnly
 *                                                } HTMLDialogElementProperties
 */
/**
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLDialogElement, HTMLDialogElementProperties>[]
 *                                                                   } contents
 */
export function dialog(...contents) {
 return _(document.createElement("dialog"), ...contents)
}