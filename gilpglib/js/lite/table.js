import { _ } from "./_.js"

/**
 * Provides special properties and methods (beyond the regular HTMLElement object interface it also has available to it by inheritance) for manipulating the layout and presentation of tables in an HTML document.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *                    LiteElementParameter<HTMLTableElement,
 *                import("./parameter/LiteElementProperties.js").
 *                         LiteElementProperties<HTMLTableElement>>[]} contents
 */
export function table(...contents) {
 return _(document.createElement("table"), ...contents)
}