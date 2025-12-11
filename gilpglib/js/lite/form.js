import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {object} HTMLFormElementOnly
 * @property {string | Signal<string>} [acceptCharset] Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/acceptCharset)
 * @property {string | Signal<string>} [action] Sets or retrieves the URL to which the form content is sent for processing.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/action)
 * @property {AutoFillBase | Signal<AutoFillBase>} [autocomplete] Specifies whether autocomplete is applied to an editable text field.
 * @property {string | Signal<string>} [encoding] Sets or retrieves the MIME encoding for the form.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/encoding)
 * @property {string | Signal<string>} [enctype] Sets or retrieves the encoding type for the form.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/enctype)
 * @property {string | Signal<string>} [method] Sets or retrieves how to send the form data to the server.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/method)
 * @property {string | Signal<string>} [name] Sets or retrieves the name of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/name)
 * @property {boolean | Signal<boolean>} [noValidate] Designates a form that is not validated when submitted.
 * @property {string | Signal<string>} [rel] 
 * @property {string | Signal<string>} [target] Sets or retrieves the window or frame at which to target content.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/target)
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLFormElement> & HTMLFormElementOnly
 *                                                  } HTMLFormElementProperties
 */
/**
 * A <form> element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLFormElement, HTMLFormElementProperties>[]
 *                                                                   } contents
 */
export function form(...contents) {
 return _(document.createElement("form"), ...contents)
}