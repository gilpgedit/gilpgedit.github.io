import { State } from "../Signal/State.js"

let _stateNewFunction = stateNewFunctionDefault

/**
 * @template Type
 * @param {(value: Type) => State<Type>} stateNewFunction
 */
export function provideStateNew(stateNewFunction) {
 _stateNewFunction = stateNewFunction
}

/**
 * @template Type
 * @param {Type} value
 * @returns {State<Type>}
 */
export function stateNew(value) {
 return _stateNewFunction(value)
}

/**
 * @param {any} value
 */
export function stateNewFunctionDefault(value) {
 return new State(value)
}