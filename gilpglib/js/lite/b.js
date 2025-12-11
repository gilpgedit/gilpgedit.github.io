import { _ } from "./_.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                              LiteElementProperties<HTMLElement>>[]} contents
 */
export function b(...contents) {
 return _(document.createElement("b"), ...contents)
}