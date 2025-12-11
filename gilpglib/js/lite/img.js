import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"

/**
 * @typedef {object} HTMLImageElementOnly
 * @property {string | Signal<string>} [alt] Sets or retrieves a text alternative to the graphic.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/alt)
 * @property {string | null | Signal<string | null>} [crossOrigin] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/crossOrigin)
 * @property {"async" | "sync" | "auto" | Signal<"async" | "sync" | "auto">} [decoding] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/decoding)
 * @property {string | Signal<string>} [fetchPriority] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/fetchPriority)
 * @property {number | Signal<number>} [height] Sets or retrieves the height of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/height)
 * @property {boolean | Signal<boolean>} [isMap] Sets or retrieves whether the image is a server-side image map.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/isMap)
 * @property {"eager" | "lazy" | Signal<"eager" | "lazy">} [loading] Sets or retrieves the policy for loading image elements that are outside the viewport.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/loading)
 * @property {string | Signal<string>} [referrerPolicy] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/referrerPolicy)
 * @property {string | Signal<string>} [sizes] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/sizes)
 * @property {string | Signal<string>} [src] The address or URL of the a media resource that is to be considered.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/src)
 * @property {string | Signal<string>} [srcset] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/srcset)
 * @property {string | Signal<string>} [useMap] Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/useMap)
 * @property {number | Signal<number>} [width] Sets or retrieves the width of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/width)
 */

/**
 * @typedef {import("./parameter/LiteElementProperties.js").
 *   LiteElementProperties<HTMLImageElement> & HTMLImageElementOnly
 *                                                 } HTMLImageElementProperties
 */
/**
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLImageElement, HTMLImageElementProperties>[]
 *                                                                   } contents
 */
export function img(...contents) {
 return _(document.createElement("img"), ...contents)
}