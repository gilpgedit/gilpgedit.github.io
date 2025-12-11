let _mutationObserverNewFunction = mutationObserverNewFunctionDefault

/**
 * @param {(callback: MutationCallback) => MutationObserver
 *                                                } mutationObserverNewFunction
 */
export function provideSearchParamsNew(mutationObserverNewFunction) {
 _mutationObserverNewFunction = mutationObserverNewFunction
}

/**
 * @param {MutationCallback} callback
 */
export function mutationObserverNew(callback) {
 return _mutationObserverNewFunction(callback)
}

/**
 * @param {MutationCallback} callback
 */
export function mutationObserverNewFunctionDefault(callback) {
 return new MutationObserver(callback)
}