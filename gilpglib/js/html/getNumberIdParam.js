import { ID_PARAM } from "../const/ID_PARAM.js"

/**
 * @param {URLSearchParams} params
 */
export function getNumberIdParam(params) {
 const id = params.get(ID_PARAM)
 return id ? parseInt(id, 10) : null
}