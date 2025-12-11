import { sortComparison } from "../sortComparison.js"
import { ListModel_sortValue } from "./ListModel.js"

/**
 * @template IdType
 * @template {string | number} Sortype
 * @param {import("./ListModel.js").ListModel<IdType, Sortype>[]} arr
 */
export function stringOrNumberListModelSort(arr) {
 arr.sort(
  (a, b) => sortComparison(a[ListModel_sortValue], b[ListModel_sortValue]))
 return arr
}