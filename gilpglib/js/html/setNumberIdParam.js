import { ID_PARAM } from "../const/ID_PARAM.js"

/**
 * @param {URLSearchParams} params
 * @param {number} id
 */
export function setNumberIdParam(params, id) {
 params.set(ID_PARAM, id.toString())
}