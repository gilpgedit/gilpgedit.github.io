import { ID_PARAM } from "../const/ID_PARAM.js"
import { searchParamsNew } from "../di/html/searchParamsNew.js"

/**
 * @param {string} url
 * @param {number} id
 */
export function numberIdUrlExtractor(url, id) {
 const params = searchParamsNew([[ID_PARAM, id.toString()]])
 return `${url}?${params}`
}
