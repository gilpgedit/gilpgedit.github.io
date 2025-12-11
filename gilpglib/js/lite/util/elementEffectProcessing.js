import { DO_NOTHING_FUNCTION } from "../../const/DO_NOTHING_FUNCTION.js"
import { nodeEffect_property } from "../../const/nodeEffect_property.js"
import {
 functionPropertyInvalidTemplate
} from "../../i18n/template/functionPropertyInvalidTemplate.js"

/**
 * @template {Node} ElementType
 * @param {ElementType} node
 * @param {any} callback
 * @param {Map<() => any, any>} effects
 */
export function elementEffectProcessing(node, callback, effects) {
 if (typeof callback !== "function")
  throw new Error(functionPropertyInvalidTemplate(nodeEffect_property))
 effects.set(() => callback.call(node), DO_NOTHING_FUNCTION)
}