/**
 * @template IdType
 * @template OrderType
 * @typedef {Object} OrderableListMediatorConfig
 * @property {string} [listEndText]
 * @property {string} orderBy
 * @property {() => Promise<import("../html/ListModel.js").
 *                          ListModel<IdType, OrderType>[]>} queryAllFunction
 * @property {(source:number, target: number,
 *   models: import("../html/ListModel.js").ListModel<IdType, OrderType>[]) =>
 *      Promise<import("../html/ListModel.js").ListModel<IdType, OrderType>[]>
 *                                                          } rearrangeFunction
 * @property {import("../html/UrlExtractor.js").UrlExtractor<IdType>
 *                                                             } [urlExtractor]
 */