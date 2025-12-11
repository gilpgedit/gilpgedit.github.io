import { ID_PARAM } from "../const/ID_PARAM.js"

/**
 * @param {URLSearchParams} params
 * @param {string} id
 */
export function appendStringIdToParam(params, id) {
 params.set(ID_PARAM, id)
}