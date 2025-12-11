import { _ } from "./_.js"

/**
 * Provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating <div> elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                              LiteElementProperties<HTMLElement>>[]} contents
 */
export function summary(...contents) {
 return _(document.createElement("summary"), ...contents)
}