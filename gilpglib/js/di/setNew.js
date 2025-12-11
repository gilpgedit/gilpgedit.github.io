let _setNewFunction = setNewFunctionDefault

/**
 * @template T
 * @param {(i?: Iterable<T> | null | undefined) => Set<T>} setNewFunction
 */
export function provideSetNew(setNewFunction) {
 _setNewFunction = setNewFunction
}

/**
 * @template T
 * @param {Iterable<T> | null | undefined} [i]
 * @returns {Set<T>}
 */
export function setNew(i) {
 return _setNewFunction(i)
}

/** @param {Iterable<any> | null | undefined} [i] */
export function setNewFunctionDefault(i) {
 return new Set(i)
}