import { _ } from "./_.js"

/**
 * Exposes specific properties and methods (beyond those of the HTMLElement interface it also has available to it by inheritance) for manipulating a block of preformatted text (<pre>).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLPreElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLPreElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                           LiteElementProperties<HTMLPreElement>>[]} contents
 */
export function pre(...contents) {
 return _(document.createElement("pre"), ...contents)
}