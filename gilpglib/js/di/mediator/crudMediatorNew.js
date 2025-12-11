import { CrudMediator } from "../../mediator/CrudMediator.js"

let _crudMediatorNewFunction = crudMediatorNewFunctionDefault

/**
 * @template IdType
 * @template ModelType
 * @param {(config: import("../../mediator/CrudMediatorConfig.js").
 *                                      CrudMediatorConfig<IdType, ModelType>)
 *                  => CrudMediator<IdType, ModelType>} crudMediatorNewFunction
 */
export function provideCrudMediatorNew(crudMediatorNewFunction) {
 _crudMediatorNewFunction = crudMediatorNewFunction
}

/**
 * @template IdType
 * @template ModelType
 * @param {import("../../mediator/CrudMediatorConfig.js").
 *                                CrudMediatorConfig<IdType, ModelType>} config
 * @returns {CrudMediator<IdType, ModelType>}
 */
export function crudMediatorNew(config) {
 return _crudMediatorNewFunction(config)
}

/**
 * @param {import("../../mediator/CrudMediatorConfig.js").
 *                                         CrudMediatorConfig<any, any>} config
 */
export function crudMediatorNewFunctionDefault(config) {
 return new CrudMediator(config)
}