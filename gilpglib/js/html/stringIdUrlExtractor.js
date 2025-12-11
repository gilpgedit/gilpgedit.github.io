import { ID_PARAM } from "../const/ID_PARAM.js"
import { searchParamsNew } from "../di/html/searchParamsNew.js"

/**
 * @param {string} url
 * @param {string} id
 */
export function stringIdUrlExtractor(url, id) {
 const params = searchParamsNew([[ID_PARAM, id]])
 return `${url}?${params}`
}
