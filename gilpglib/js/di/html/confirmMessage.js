import {
 confirmMessageBasicFunction
} from "../../html/confirmMessageBasicFunction.js"

export const confirmMessageFunctionDefault = confirmMessageBasicFunction
let _confirmMessageFunction = confirmMessageFunctionDefault

/**
 * @param {(message: string) => Promise<boolean>} confirmMessageFunction
 */
export function provideConfirmMessage(confirmMessageFunction) {
 _confirmMessageFunction = confirmMessageFunction
}

/**
 * @param {string} message
 */
export function confirmMessage(message) {
 return _confirmMessageFunction(message)
}