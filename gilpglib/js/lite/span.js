import { _ } from "./_.js"

/**
 * A <span> element and derives from the HTMLElement interface, but without implementing any additional properties or methods.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLSpanElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                          LiteElementProperties<HTMLSpanElement>>[]} contents
 */
export function span(...contents) {
 return _(document.createElement("span"), ...contents)
}