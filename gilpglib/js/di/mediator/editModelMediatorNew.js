import { EditModelMediator } from "../../mediator/EditModelMediator.js"

let _editModelMediatorNewFunction = editModelMediatorNewFunctionDefault

/**
 * @template IdType
 * @template ModelType
 * @param {(config: import("../../mediator/EditModelMediatorConfig.js").
 *                                  EditModelMediatorConfig<IdType, ModelType>)
 *        => EditModelMediator<IdType, ModelType>} editModelMediatorNewFunction
 */
export function provideEditMediatorNew(editModelMediatorNewFunction) {
 _editModelMediatorNewFunction = editModelMediatorNewFunction
}

/**
 * @template IdType
 * @template ModelType
 * @param {import("../../mediator/EditModelMediatorConfig.js").
 *                           EditModelMediatorConfig<IdType, ModelType>} config
 * @returns {EditModelMediator<IdType, ModelType>}
 */
export function editModelMediatorNew(config) {
 return _editModelMediatorNewFunction(config)
}

/**
 * @param {import("../../mediator/EditModelMediatorConfig.js").
 *                                    EditModelMediatorConfig<any, any>} config
 */
export function editModelMediatorNewFunctionDefault(config) {
 return new EditModelMediator(config)
}