import { _ } from "./_.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *               LiteElementParameter<HTMLElement,
 *               import("./parameter/LiteElementProperties.js").
 *                              LiteElementProperties<HTMLElement>>[]} contents
 */
export function figcaption(...contents) {
 return _(document.createElement("figcaption"), ...contents)
}