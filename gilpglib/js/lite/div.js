import { _ } from "./_.js"

/**
 * Provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <div> elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLDivElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                           LiteElementProperties<HTMLDivElement>>[]} contents
 */
export function div(...contents) {
 return _(document.createElement("div"), ...contents)
}