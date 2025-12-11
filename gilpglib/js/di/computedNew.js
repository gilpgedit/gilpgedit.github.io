import { Computed } from "../Signal/Computed.js"

let _computedNewFunction = computedNewFunctionDefault

/**
 * @template T
 * @param {(callback: (this: Computed<T>) => any,
 *   options: import("../Signal/SignalOptions.js").SignalOptions<T>) =>
 *                                        Computed<T>} computedNewFunction
 */
export function provideComputedNew(computedNewFunction) {
 _computedNewFunction = computedNewFunction
}

/**
 * @template T
 * @param {(this: Computed<T>) => T} callback
 * @param {import("../Signal/SignalOptions.js").SignalOptions<T>} options
 * @returns {Computed<T>}
 */
export function computedNew(callback, options = {}) {
 return _computedNewFunction(callback, options)
}

/**
 * @param {(this: Computed<any>) => any} callback
 * @param {import("../Signal/SignalOptions.js").SignalOptions<any>} options
 */
export function computedNewFunctionDefault(callback, options = {}) {
 return new Computed(callback, options)
}