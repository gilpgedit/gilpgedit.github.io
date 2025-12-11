import { _ } from "./_.js"

/**
 * Provides properties and methods (beyond those inherited from HTMLElement) for manipulating the layout and presentation of <output> elements.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLParagraphElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                     LiteElementProperties<HTMLParagraphElement>>[]} contents
 */
export function p(...contents) {
 return _(document.createElement("p"), ...contents)
}