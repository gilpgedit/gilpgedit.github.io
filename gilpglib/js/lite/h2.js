import { _ } from "./_.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLHeadingElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                       LiteElementProperties<HTMLHeadingElement>>[]} contents
 */
export function h2(...contents) {
 return _(document.createElement("h2"), ...contents)
}