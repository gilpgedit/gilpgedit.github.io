import { modelsMove } from "./modelsMove.js"
import { renumber } from "./renumber.js"

/**
 * @template IdType
 * @template OrderType
 * @param {string} orderBy
 * @param {number} source
 * @param {number} target
 * @param {import("./html/ListModel.js").ListModel<IdType, OrderType>[]} models
 */
export function modelsRearrange(orderBy, source, target, models) {
 if (modelsMove(source, target, models)) {
  renumber(models, orderBy)
  return true
 } else {
  return false
 }
}