import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {Object} HTMLHyperlinkElementUtilsProperties
 * @property {string | Signal<string>} [hash] Returns the hyperlink's URL's fragment (includes leading "#" if non-empty).
 *                Can be set, to change the URL's fragment (ignores leading "#").
 *                [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/hash)
 * @property {string | Signal<string>} [host] Returns the hyperlink's URL's host and port (if different from the default port for the scheme).
 *                Can be set, to change the URL's host and port.
 *                [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/host)
 * @property {string | Signal<string>} [hostname] Returns the hyperlink's URL's host.
 *                Can be set, to change the URL's host.
 *                [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/hostname)
 * @property {string | Signal<string>} [href] Returns the hyperlink's URL.
 *                Can be set, to change the URL.
 *                [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/href)
 * @property {string | Signal<string>} [password] Returns the hyperlink's URL's password.
 *                Can be set, to change the URL's password.
 *                [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/password)
 * @property {string | Signal<string>} [pathname] Returns the hyperlink's URL's path.
 *                Can be set, to change the URL's path.
 *                [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/pathname)
 * @property {string | Signal<string>} [port] Returns the hyperlink's URL's port.
 *                Can be set, to change the URL's port.
 *                [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/port)
 * @property {string | Signal<string>} [protocol] Returns the hyperlink's URL's scheme.
 *                Can be set, to change the URL's scheme.
 *                [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/protocol)
 * @property {string | Signal<string>} [search] Returns the hyperlink's URL's query (includes leading "?" if non-empty).
 *                Can be set, to change the URL's query (ignores leading "?").
 *                [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/search)
 * @property {string | Signal<string>} [username] Returns the hyperlink's URL's username.
 *                Can be set, to change the URL's username.
 *                [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/username)
 */
/**
 * @typedef {Object} HTMLAnchorElementOnly
 * @property {string | Signal<string>} [download] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/download)
 * @property {string | Signal<string>} [hreflang] Sets or retrieves the language code of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/hreflang)
 * @property {string | Signal<string>} [ping] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/ping)
 * @property {string | Signal<string>} [referrerPolicy] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/referrerPolicy)
 * @property {string | Signal<string>} [rel] Sets or retrieves the relationship between the object and the destination of the link.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/rel)
 * @property {string | Signal<string>} [target] Sets or retrieves the window or frame at which to target content.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/target)
 * @property {string | Signal<string>} [text] Retrieves or sets the text of the object as a string.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/text)
 * @property {string | Signal<string>} [type] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/type)
 */
/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLAnchorElement> &
 *  HTMLHyperlinkElementUtilsProperties & HTMLAnchorElementOnly
 *                                                } HTMLAnchorElementProperties
 */
/**
 * Hyperlink elements and provides special properties and methods (beyond those of the regular HTMLElement object interface that they inherit from) for manipulating the layout and presentation of such elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLAnchorElement, HTMLAnchorElementProperties>[]
 *                                                                   } contents
 */
export function a(...contents) {
 return _(document.createElement("a"), ...contents)
}