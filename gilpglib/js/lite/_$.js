import { _ } from "./_.js"

/**
 * @template {HTMLElement} ElementType
 * @template {import("./parameter/LiteElementProperties.js").
 *                           LiteElementProperties<ElementType>} AttributesType
 * @param {ElementType} node
 * @param {import("./parameter/LiteElementParameter.js").
 *                LiteElementParameter<ElementType, AttributesType>[]} contents
 * @returns {ElementType}
 */
export function _$(node, ...contents) {
 node.innerHTML = ""
 return _(node, ...contents)
}