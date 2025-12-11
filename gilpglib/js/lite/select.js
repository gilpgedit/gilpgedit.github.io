import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {object} HTMLSelectElementOnly
 * @property {AutoFill | Signal<AutoFill>} [autocomplete] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/autocomplete)
 * @property {boolean | Signal<boolean>} [disabled] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/disabled)
 * @property {number | Signal<number>} [length] Sets or retrieves the number of objects in a collection. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/length)
 * @property {boolean | Signal<boolean>} [multiple] Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/multiple)
 * @property {string | Signal<string>} [name] Sets or retrieves the name of the object. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/name)
 * @property {string | Signal<string>} [required] When present, marks an element that can't be submitted without a value. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/value)
 * @property {number | Signal<number>} [selectedIndex] Sets or retrieves the index of the selected option in a select object. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/selectedIndex)
 * @property {number | Signal<number>} [size] Sets or retrieves the number of rows in the list box. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/size)
 * @property {string | Signal<string>} [value] Sets or retrieves the value which is returned to the server when the form control is submitted. [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/value)
 */

/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLSelectElement> & HTMLSelectElementOnly
 *                                               } HTMLSelectElementProperties
 */
/**
 * A <select> HTML Element. These elements also share all of the properties and methods of other HTML elements via the HTMLElement interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLSelectElement, HTMLSelectElementProperties>[]
 *                                                                   } contents
 */
export function select(...contents) {
 return _(document.createElement("select"), ...contents)
}