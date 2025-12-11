import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {object} HTMLFieldSetElementOnly
 * @property {boolean | Signal<boolean>} [disabled] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFieldSetElement/disabled)
 * @property {string | Signal<string>} [name] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFieldSetElement/name)
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLFieldSetElement> & HTMLFieldSetElementOnly
 *                                              } HTMLFieldSetElementProperties
 */
/**
 * Provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of <fieldset> elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFieldSetElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *  LiteElementParameter<HTMLFieldSetElement, HTMLFieldSetElementProperties>[]
 *                                                                   } contents
 */
export function fieldset(...contents) {
 return _(document.createElement("fieldset"), ...contents)
}