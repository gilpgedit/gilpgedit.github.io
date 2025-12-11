import { AddModelMediator } from "../../mediator/AddModelMediator.js"

let _addModelMediatorNewFunction = addModelMediatorNewFunctionDefault

/**
 * @template IdType
 * @template ModelType
 * @param {(config: import("../../mediator/AddModelMediatorConfig.js").
 *                                  AddModelMediatorConfig<IdType, ModelType>)
 *          => AddModelMediator<IdType, ModelType>} addModelMediatorNewFunction
 */
export function provideAddModelMediatorNew(addModelMediatorNewFunction) {
 _addModelMediatorNewFunction = addModelMediatorNewFunction
}

/**
 * @template IdType
 * @template ModelType
 * @param {import("../../mediator/AddModelMediatorConfig.js").
 *                            AddModelMediatorConfig<IdType, ModelType>} config
 * @returns {AddModelMediator<IdType, ModelType>}
 */
export function addModelMediatorNew(config) {
 return _addModelMediatorNewFunction(config)
}

/**
 * @param {import("../../mediator/AddModelMediatorConfig.js").
 *                                     AddModelMediatorConfig<any, any>} config 
 */
export function addModelMediatorNewFunctionDefault(config) {
 return new AddModelMediator(config)
}