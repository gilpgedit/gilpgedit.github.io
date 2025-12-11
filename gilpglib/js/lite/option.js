import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {object} HTMLOptionElementOnly
 * @property {boolean | Signal<boolean>} [defaultSelected] Sets or retrieves the status of an option. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/defaultSelected)
 * @property {boolean | Signal<boolean>} [disabled] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/disabled) 
 * @property {string | Signal<string>} [label] Sets or retrieves a value that you can use to implement your own label functionality for the object. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/label)
 * @property {boolean | Signal<boolean>} [selected] Sets or retrieves whether the option in the list box is the default item. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/selected)
 * @property {string | Signal<string>} [text] Sets or retrieves the text string specified by the option tag. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/text)
 * @property {string | Signal<string>} [value] Sets or retrieves the value which is returned to the server when the form control is submitted. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/value)
 */

/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLOptionElement> & HTMLOptionElementOnly
 *                                                } HTMLOptionElementProperties
 */
/**
 * <option> elements and inherits all classes and methods of the HTMLElement interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *     LiteElementParameter<HTMLOptionElement, HTMLOptionElementProperties>[]
 *                                                                   } contents
 */
export function option(...contents) {
 return _(document.createElement("option"), ...contents)
}