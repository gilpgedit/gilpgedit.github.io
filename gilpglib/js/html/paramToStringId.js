import { ID_PARAM } from "../const/ID_PARAM.js"

/**
 * @param {URLSearchParams} params
 */
export function paramToStringId(params) {
 return params.get(ID_PARAM)
}