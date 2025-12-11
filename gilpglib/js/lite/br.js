import { _ } from "./_.js"

/**
 * The **`HTMLBRElement`** interface represents an HTML line break element (br).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLBRElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLBRElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                          LiteElementProperties<HTMLBRElement>>[]} contents
 */
export function br(...contents) {
 return _(document.createElement("br"), ...contents)
}