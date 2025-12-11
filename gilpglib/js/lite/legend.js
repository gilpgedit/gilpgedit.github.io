import { _ } from "./_.js"

/**
 * The HTMLLegendElement is an interface allowing to access properties of the <legend> elements. It inherits properties and methods from the HTMLElement interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLLegendElement)
 * @param {import("./parameter/LiteElementParameter.js").
*                         LiteElementParameter<HTMLLegendElement,
*                           import("./parameter/LiteElementProperties.js").
*                         LiteElementProperties<HTMLLegendElement>>[]} contents
*/
export function legend(...contents) {
 return _(document.createElement("legend"), ...contents)
}