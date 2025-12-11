import { _ } from "./_.js"

/**
 * Provides special properties and methods (beyond the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of rows in an HTML table.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableRowElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *             LiteElementParameter<HTMLTableRowElement,
 *                import("./parameter/LiteElementProperties.js").
 *                  LiteElementProperties<HTMLTableRowElement>>[]} contents
 */
export function tr(...contents) {
 return _(document.createElement("tr"), ...contents)
}