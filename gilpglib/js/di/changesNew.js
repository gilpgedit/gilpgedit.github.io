import { Changes } from "../Changes.js"

let _fn = changesNewDefault

/**
 * @template K
 * @template M
 * @param {() => Changes<K, M>} fn
 */
export function provideChangesNewDefault(fn) {
 _fn = fn
}

/**
 * @template K
 * @template M
 * @returns {Changes<K, M>}
 */
export function changesNew() {
 return _fn()
}

export function changesNewDefault() {
 return new Changes()
}