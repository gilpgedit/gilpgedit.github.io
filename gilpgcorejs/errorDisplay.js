/**
 * @type {import("./MessageDisplayFunction.js").MessageDisplayFunction}
 */
let _errorDisplay = errorDisplayDefault

/**
 * @param {import("./MessageDisplayFunction.js").MessageDisplayFunction
 *                                                       } errorDisplayFunction
 */
export function provideAlertDisplay(errorDisplayFunction) {
 _errorDisplay = errorDisplayFunction
}

/**
 * @param {string} message
 */
export async function errorDisplay(message) {
 return _errorDisplay(message)
}

/**
 * @param {string} message
 */
export async function errorDisplayDefault(message) {
 console.error(message)
}