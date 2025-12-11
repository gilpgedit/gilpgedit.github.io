import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {Object} HTMLInputElementOnly
 * @property {string | Signal<string>} [accept] Sets or retrieves a comma-separated list of content types.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/accept)
 * @property {string | Signal<string>} [alt] Sets or retrieves a text alternative to the graphic.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/alt)
 * @property {AutoFill | Signal<AutoFill>} [autocomplete] Specifies whether autocomplete is applied to an editable text field.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/autocomplete)
 * @property {string | Signal<string>} [capture] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/capture)
 * @property {boolean | Signal<boolean>} [checked] Sets or retrieves the state of the check box or radio button.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/checked)
 * @property {boolean | Signal<boolean>} [defaultChecked] Sets or retrieves the state of the check box or radio button.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/defaultChecked)
 * @property {string | Signal<string>} [defaultValue] Sets or retrieves the initial contents of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/defaultValue)
 * @property {string | Signal<string>} [dirName]
 * @property {boolean | Signal<boolean>} [disabled] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/disabled)
 * @property {string | Signal<string>} [formAction] Overrides the action attribute (where the data on a form is sent) on the parent form element.
 * @property {string | Signal<string>} [formEnctype] Used to override the encoding (formEnctype attribute) specified on the form element.
 * @property {string | Signal<string>} [formMethod] Overrides the submit method attribute previously specified on a form element.
 * @property {boolean | Signal<boolean>} [formNoValidate] Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
 * @property {string | Signal<string>} [formTarget] Overrides the target attribute on a form element.
 * @property {number | Signal<number>} [height] Sets or retrieves the height of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/height)
 * @property {boolean | Signal<boolean>} [indeterminate] When set, overrides the rendering of checkbox controls so that the current value is not visible.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/indeterminate)
 * @property {string | Signal<string>} [max] Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/max)
 * @property {number | Signal<number>} [maxLength] Sets or retrieves the maximum number of characters that the user can enter in a text control.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/maxLength)
 * @property {string | Signal<string>} [min] Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/min)
 * @property {number | Signal<number>} [minLength] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/minLength)
 * @property {boolean | Signal<boolean>} [multiple] Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/multiple)
 * @property {string | Signal<string>} [name] Sets or retrieves the name of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/name)
 * @property {string | Signal<string>} [pattern] Gets or sets a string containing a regular expression that the user's input must match.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/pattern)
 * @property {string | Signal<string>} [placeholder] Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/placeholder)
 * @property {boolean | Signal<boolean>} [readOnly] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/readOnly)
 * @property {boolean | Signal<boolean>} [required] When present, marks an element that can't be submitted without a value.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/required)
 * @property {"forward" | "backward" | "none" | null |
 *           Signal<"forward" | "backward" | "none" | null>} [selectionDirection] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/selectionDirection)
 * @property {number | null | Signal<number | null>} [selectionEnd] Gets or sets the end position or offset of a text selection.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/selectionEnd)
 * @property {number | null | Signal<number | null>} [selectionStart] Gets or sets the starting position or offset of a text selection.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/selectionStart)
 * @property {number | Signal<number>} [size] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/size)
 * @property {string | Signal<string>} [src] The address or URL of the a media resource that is to be considered.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/src)
 * @property {string | Signal<string>} [step] Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/step)
 * @property {string | Signal<string>} [type] Returns the content type of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/type)
 * @property {string | Signal<string>} [value] Returns the value of the data at the cursor's current position.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/value)
 * @property {Date | null | Signal<Date | null>} [valueAsDate] Returns a Date object representing the form control's value, if applicable; otherwise, returns null. Can be set, to change the value. Throws an "InvalidStateError" DOMException if the control isn't date- or time-based.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/valueAsDate)
 * @property {number | Signal<number>} [valueAsNumber] Returns the input field value as a number.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/valueAsNumber)
 * @property {boolean | Signal<boolean>} [webkitdirectory] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/webkitdirectory)
 * @property {number | Signal<number>} [width] Sets or retrieves the width of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/width)
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLInputElement> &
 *  import("./parameter/PopoverInvokerElementProperties.js").
 *   PopoverInvokerElementProperties & HTMLInputElementOnly
 *                                                 } HTMLInputElementProperties
 */
/**
 * Provides special properties and methods for manipulating the options, layout, and presentation of <input> elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLInputElement, HTMLInputElementProperties>[]
 *                                                                   } contents
 */
export function input(...contents) {
 return _(document.createElement("input"), ...contents)
}