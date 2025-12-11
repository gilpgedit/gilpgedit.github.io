/**
 * @template IdType
 * @template SortType
 * @param {number} start
 * @param {number} pageLength
 * @param {import("./ListModel.js").ListModel<IdType, SortType>[]} array
 */
export function nextPageArrayTest(start, pageLength, array) {
 const end = start + pageLength
 const slice = array.slice(start, end)
 return { end, slice }
}