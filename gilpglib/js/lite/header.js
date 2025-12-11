import { _ } from "./_.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                              LiteElementProperties<HTMLElement>>[]} contents
 */
export function header(...contents) {
 return _(document.createElement("header"), ...contents)
}