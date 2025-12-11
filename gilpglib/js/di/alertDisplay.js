
export const alertDisplayFunctionDefault = alert

let _alertDisplayFunction = alertDisplayFunctionDefault

/**
 * @param {(message: string) => any} alertDisplayFunction
 */
export function provideAlertDisplay(alertDisplayFunction) {
 _alertDisplayFunction = alertDisplayFunction
}

/**
 * @param {string} message
 */
export function alertDisplay(message) {
 _alertDisplayFunction(message)
}