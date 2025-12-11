import { _ } from "./_.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *              LiteElementParameter<HTMLTableCellElement,
 *      import("./parameter/HTMLTableCellElementProperties.js").
 *                                  HTMLTableCellElementProperties>[]} contents
 */
export function td(...contents) {
 return _(document.createElement("td"), ...contents)
}