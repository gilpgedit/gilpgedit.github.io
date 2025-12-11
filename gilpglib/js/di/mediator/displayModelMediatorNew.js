import { DisplayModelMediator } from "../../mediator/DisplayModelMediator.js"

let _displayModelMediatorNewNewFunction = displayModelMediatorNewFunctionDefault

/**
 * @template IdType
 * @template ModelType
 * @param {(config: import("../../mediator/DisplayModelMediatorConfig.js").
 *                               DisplayModelMediatorConfig<IdType, ModelType>)
 *   => DisplayModelMediator<IdType, ModelType>} displayModelMediatorNewFunction
 */
export function provideDisplayModelMediatorNew(
 displayModelMediatorNewFunction) {
 _displayModelMediatorNewNewFunction = displayModelMediatorNewFunction
}

/**
 * @template IdType
 * @template ModelType
 * @param {import("../../mediator/DisplayModelMediatorConfig.js").
 *                        DisplayModelMediatorConfig<IdType, ModelType>} config
 * @returns {DisplayModelMediator<IdType, ModelType>}
 */
export function displayModelMediatorNew(config) {
 return _displayModelMediatorNewNewFunction(config)
}

/**
 * @param {import("../../mediator/DisplayModelMediatorConfig.js").
 *                                 DisplayModelMediatorConfig<any, any>} config
 */
export function displayModelMediatorNewFunctionDefault(config) {
 return new DisplayModelMediator(config)
}