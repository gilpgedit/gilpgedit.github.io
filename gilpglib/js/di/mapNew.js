let _mapNewFunction = mapNewFunctionDefault

/**
 * @template Key
 * @template Value
 * @param {(i?: Iterable<readonly[Key, Value]> | null | undefined) =>
 *                                             Map<Key, Value> } mapNewFunction
 */
export function provideMapNew(mapNewFunction) {
 _mapNewFunction = mapNewFunction
}

/**
 * @template Key
 * @template Value
 * @param {Iterable<readonly[Key, Value]> | null | undefined} [i]
 * @returns {Map<Key, Value>}
 */
export function mapNew(i) {
 return _mapNewFunction(i)
}

/** @param {Iterable<readonly[any, any]> | null | undefined} [i] */
export function mapNewFunctionDefault(i) {
 return new Map(i)
}