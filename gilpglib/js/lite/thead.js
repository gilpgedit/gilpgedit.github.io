import { _ } from "./_.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *             LiteElementParameter<HTMLTableSectionElement,
 *                import("./parameter/LiteElementProperties.js").
 *                  LiteElementProperties<HTMLTableSectionElement>>[]} contents
 */
export function thead(...contents) {
 return _(document.createElement("thead"), ...contents)
}