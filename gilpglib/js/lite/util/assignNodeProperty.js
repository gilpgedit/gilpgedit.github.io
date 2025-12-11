import { DO_NOTHING_FUNCTION } from "../../const/DO_NOTHING_FUNCTION.js"
import {
 nodePropertyNameNotInNodeTemplate
} from "../../i18n/template/nodePropertyNameNotInNodeTemplate.js"
import { Signal } from "../../Signal/Signal.js"

/**
 * @param {Node} node
 * @param {string} propertyName
 * @param {any} propertyValue
 * @param {Map<() => any, () => any>} effects
 */
export function assignNodeProperty(node, propertyName, propertyValue, effects) {
 if (!(propertyName in node))
  throw new Error(nodePropertyNameNotInNodeTemplate(propertyName))
 if (propertyValue instanceof Signal) {
  effects
   .set(() => node[propertyName] = propertyValue.get(), DO_NOTHING_FUNCTION)
 } else if (propertyValue !== undefined) {
  node[propertyName] = propertyValue
 } {
 }
}