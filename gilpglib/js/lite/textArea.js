import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {Object} HTMLTextAreaElementOnly
 * @property {AutoFill | Signal<AutoFill>} [autocomplete] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/autocomplete
 * @property {number | Signal<number>} [cols] Sets or retrieves the width of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/cols)
 * @property {string | Signal<string>} [defaultValue] Sets or retrieves the initial contents of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/defaultValue)
 * @property {string | Signal<string>} [dirName]
 * @property {boolean | Signal<boolean>} [disabled] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/disabled)
 * @property {number | Signal<number>} [maxLength] Sets or retrieves the maximum number of characters that the user can enter in a text control.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/maxLength)
 * @property {number | Signal<number>} [minLength] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/minLength)
 * @property {string | Signal<string>} [name] Sets or retrieves the name of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/name)
 * @property {string | Signal<string>} [placeholder] Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/placeholder)
 * @property {boolean | Signal<boolean>} [readOnly] Sets or retrieves the value indicated whether the content of the object is read-only.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/readOnly)
 * @property {boolean | Signal<boolean>} [required] When present, marks an element that can't be submitted without a value.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/required)
 * @property {number | Signal<number>} [rows] Sets or retrieves the number of horizontal rows contained in the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/rows)
 * @property {"forward" | "backward" | "none" | Signal<"forward" | "backward" | "none">} [selectionDirection] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/selectionDirection)
 * @property {number | Signal<number>} [selectionEnd] Gets or sets the end position or offset of a text selection.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/selectionEnd)
 * @property {number | Signal<number>} [selectionStart] Gets or sets the starting position or offset of a text selection.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/selectionStart)
 * @property {string | Signal<string>} [value] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/value)
 * @property {string | Signal<string>} [wrap] Sets or retrieves how to handle wordwrapping in the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/wrap)
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLTextAreaElement> & HTMLTextAreaElementOnly
 *                                              } HTMLTextAreaElementProperties
 */
/**
 * Provides special properties and methods for manipulating the layout and presentation of <textarea> elements.
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *  LiteElementParameter<HTMLTextAreaElement, HTMLTextAreaElementProperties>[]
 *                                                                   } contents
 */
export function textArea(...contents) {
 return _(document.createElement("textarea"), ...contents)
}