import { _ } from "./_.js"

/**
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMenuElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLMenuElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                          LiteElementProperties<HTMLMenuElement>>[]} contents
 */
export function menu(...contents) {
 return _(document.createElement("menu"), ...contents)
}