import { ListModel_id } from "./ListModel.js"

/**
 * @template SortType
 * @param {Readonly<import("./ListModel.js").
 *                          ListModel<string, SortType> | undefined>} listModel
 */
export function stringIdListModelIdentity(listModel) {
 return listModel? listModel[ListModel_id] : ""
}