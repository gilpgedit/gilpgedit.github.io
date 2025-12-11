import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {object} HTMLButtonElementOnly
 * @property {boolean | Signal<boolean>} [disabled] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/disabled)
 * @property {string | Signal<string>} [formAction] Overrides the action attribute (where the data on a form is sent) on the parent form element.
 * @property {string | Signal<string>} [formEnctype] Used to override the encoding (formEnctype attribute) specified on the form element.
 * @property {string | Signal<string>} [formMethod] Overrides the submit method attribute previously specified on a form element.
 * @property {boolean | Signal<boolean>} [formNoValidate] Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
 * @property {string | Signal<string>} [formTarget] Overrides the target attribute on a form element.
 * @property {string | Signal<string>} [name] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/name)
 * @property {"submit" | "reset" | "button"|
 *          Signal<"submit" | "reset" | "button">} [type] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/type)
 * @property {string | Signal<string>} [value] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/value)
 */

/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLButtonElement> &
 *  import("./parameter/PopoverInvokerElementProperties.js").
 *   PopoverInvokerElementProperties & HTMLButtonElementOnly
 *                                               } HTMLButtonElementProperties
 */
/**
 * Provides properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <button> elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLButtonElement, HTMLButtonElementProperties>[]
 *                                                                   } contents
 */
export function button(...contents) {
 return _(document.createElement("button"), ...contents)
}