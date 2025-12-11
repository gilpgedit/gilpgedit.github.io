/**
 * @template IdType
 * @template ModelType
 * @typedef {Object} CrudMediatorConfig
 * @property {string} backUrl
 * @property {Element} rootElement
 * @property {(p:URLSearchParams) => (IdType|null)} getIdParamFunction
 * @property {(p:URLSearchParams, id:IdType) => any} setIdParamFunction
 * @property {() => import("./AddModelMediator.js").
 *                      AddModelMediator<IdType, ModelType>} addMediatorFactory
 * @property {() => import("./DisplayModelMediator.js").
 *              DisplayModelMediator<IdType, ModelType>} displayMediatorFactory
 * @property {() => import("./EditModelMediator.js").
 *                    EditModelMediator<IdType, ModelType>} editMediatorFactory
 */