import { _ } from "./_.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
*               LiteElementParameter<HTMLUListElement,
*               import("./parameter/LiteElementProperties.js").
*                          LiteElementProperties<HTMLUListElement>>[]} contents
*/
export function ul(...contents) {
 return _(document.createElement("ul"), ...contents)
}