import { PagingListMediator } from "../../mediator/PagingListMediator.js"

let _pagingListMediatorNewFunction = pagingListMediatorNewFunctionDefault

/**
 * @template IdType
 * @template SortType
 * @param {(paging: import("../../html/Paging.js").Paging<IdType, SortType>,
 *   urlExtractor?: import("../../html/UrlExtractor.js").UrlExtractor<IdType>)
 *                                     => PagingListMediator<IdType, SortType>
 *                                              } pagingListMediatorNewFunction
 */
export function providePagingListMediatorNew(pagingListMediatorNewFunction) {
 _pagingListMediatorNewFunction =
  pagingListMediatorNewFunction
}

/**
 * @template IdType
 * @template SortType
 * @param {import("../../html/Paging.js").Paging<IdType, SortType>} paging
 * @param {import("../../html/UrlExtractor.js").UrlExtractor<IdType>
*                                                             } [urlExtractor]
*/
export function pagingListMediatorNew(paging, urlExtractor) {
 return _pagingListMediatorNewFunction(paging, urlExtractor)
}

/**
 * @param {import("../../html/Paging.js").Paging<any, any>} paging
 * @param {import("../../html/UrlExtractor.js").UrlExtractor<any>
 *                                                             } [urlExtractor]
 */
export function pagingListMediatorNewFunctionDefault(paging, urlExtractor) {
 return new PagingListMediator(paging, urlExtractor)
}