import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {object} HTMLIFrameElementOnly
 * @property {string | Signal<string>} [allow] The **`allow`** property of the HTMLIFrameElement interface indicates the Permissions Policy specified for this `<iframe>` element.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/allow)
 * @property {boolean | Signal<boolean>} [allowFullscreen] The **`allowFullscreen`** property of the HTMLIFrameElement interface is a boolean value that reflects the `allowfullscreen` attribute of the iframe element, indicating whether to allow the iframe's contents to use Element.requestFullscreen.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/allowFullscreen)
 * @property {string | Signal<string>} [height] The **`height`** property of the HTMLIFrameElement interface returns a string that reflects the `height` attribute of the iframe element, indicating the height of the frame in CSS pixels.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/height)
 * @property {"eager" | "lazy" | Signal<"eager" | "lazy">} [loading] The **`loading`** property of the HTMLIFrameElement interface is a string that provides a hint to the user agent indicating whether the iframe should be loaded immediately on page load, or only when it is needed.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/loading)
 * @property {string | Signal<string>} [name] The **`name`** property of the HTMLIFrameElement interface is a string value that reflects the `name` attribute of the iframe element, indicating the specific name of the `<iframe>` element.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/name)
 * @property {ReferrerPolicy | Signal<ReferrerPolicy>} [referrerPolicy] The **`HTMLIFrameElement.referrerPolicy`** property reflects the HTML `referrerpolicy` attribute of the resource.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/referrerPolicy)
 * @property {string | Signal<string>} [sandbox] The **`sandbox`** read-only property of the HTMLIFrameElement interface returns a DOMTokenList indicating extra restrictions on the behavior of the nested content.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/sandbox)
 * @property {string | Signal<string>} [src] The **`HTMLIFrameElement.src`** A string that reflects the `src` HTML attribute, containing the address of the content to be embedded.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/src)
 * @property {string | Signal<string>} [sizes] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/sizes)
 * @property {string | Signal<string>} [src] The address or URL of the a media resource that is to be considered.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/src)
 * @property {string | Signal<string>} [srcdoc] The **`srcdoc`** property of the HTMLIFrameElement specifies the content of the page.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/srcdoc)
 * @property {string | Signal<string>} [width] The **`width`** property of the HTMLIFrameElement interface returns a string that reflects the `width` attribute of the iframe element, indicating the width of the frame in CSS pixels.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/width)
 */

/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLIFrameElement> & HTMLIFrameElementOnly
 *                                                } HTMLIFrameElementProperties
 */
/**
 * @param {import("./parameter/LiteElementParameter.js").
 *   LiteElementParameter<HTMLIFrameElement, HTMLIFrameElementProperties>[]
 *                                                                   } contents
 */
export function iframe(...contents) {
 return _(document.createElement("iframe"), ...contents)
}