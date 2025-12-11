/**
 * @template IdType
 * @template SortType
 * @typedef {Object} Paging
 * @property {number} pageLength
 * @property {(formElement: HTMLFormElement) =>
 *    Promise<import("./ListModel.js").ListModel<IdType, SortType>[]>} doFilter
 * @property {(formElement: HTMLFormElement) =>
 *    Promise<import("./ListModel.js").ListModel<IdType, SortType>[]>} nextPage
 */