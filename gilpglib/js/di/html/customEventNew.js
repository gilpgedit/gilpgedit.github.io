let _customEventNewFunction = customEventNewFunctionDefault

/**
 * @template T
 * @param {(type: string, detail: T) => CustomEvent<T>} customEventNewFunction
 */
export function provideCustomEventsNew(customEventNewFunction) {
 _customEventNewFunction = customEventNewFunction
}

/**
 * @template T
 * @param {string} type
 * @param {T} detail
 * @returns {CustomEvent<T>}
 */
export function customEventNew(type, detail) {
 return _customEventNewFunction(type, detail)
}


/**
 * @param {string} type
 * @param {any} detail
 */
export function customEventNewFunctionDefault(type, detail) {
 return new CustomEvent(type, { detail })
}