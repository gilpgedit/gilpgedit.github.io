import { ID_PARAM } from "../const/ID_PARAM.js"

/**
 * @param {URLSearchParams} params
 */
export function getSetringIdParam(params) {
 return params.get(ID_PARAM)
}