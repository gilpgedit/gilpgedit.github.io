let _regExpNewFunction = regExpNewFunctionDefault

/**
 * @param {(pattern: RegExp | string, flags?: string) => RegExp} newFunction
 */
export function provideRegExpNew(newFunction) {
 _regExpNewFunction = newFunction
}

/**
 * @param {RegExp | string} pattern
 * @param {string} [flags]
 */
export function regExpNew(pattern, flags) {
 return _regExpNewFunction(pattern, flags)
}

/**
 * @param {RegExp | string} pattern
 * @param {string} [flags]
 */
export function regExpNewFunctionDefault(pattern, flags) {
 return new RegExp(pattern, flags)
}