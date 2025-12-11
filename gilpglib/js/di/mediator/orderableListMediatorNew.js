import { OrderableListMediator } from "../../mediator/OrderableListMediator.js"

let _orderableListMediatorNewFunction = orderableListMediatorNewFunctionDefault

/**
 * @template IdType
 * @param {(config: import("../../mediator/OrderableListMediatorConfig.js").
 *                               OrderableListMediatorConfig<IdType, number>)
 *                                    => OrderableListMediator<IdType, number>
 *                                           } orderableListMediatorNewFunction
 */
export function provideOrderableListMediatorNew(
 orderableListMediatorNewFunction) {
 _orderableListMediatorNewFunction = orderableListMediatorNewFunction
}

/**
 * @template IdType
 * @param {import("../../mediator/OrderableListMediatorConfig.js").
 *                          OrderableListMediatorConfig<IdType, number>} config
*/
export function orderableListMediatorNew(config) {
 return _orderableListMediatorNewFunction(config)
}

/**
 * @param {import("../../mediator/OrderableListMediatorConfig.js").
 *                             OrderableListMediatorConfig<any, number>} config
 */
export function orderableListMediatorNewFunctionDefault(config) {
 return new OrderableListMediator(config)
}