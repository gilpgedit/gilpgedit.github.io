/**
 * @type {import("./MessageDisplayFunction.js").MessageDisplayFunction}
 */
let _alertDisplay = alertDisplayDefault

/**
 * @param {import("./MessageDisplayFunction.js").MessageDisplayFunction
 *                                                       } alertDisplayFunction
 */
export function provideAlertDisplay(alertDisplayFunction) {
 _alertDisplay = alertDisplayFunction
}

/**
 * @param {string} message
 */
export async function alertDisplay(message) {
 return _alertDisplay(message)
}

/**
 * @param {string} message
 */
export async function alertDisplayDefault(message) {
 console.log(message)
}