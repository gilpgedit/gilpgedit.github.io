import { errorText } from "#gilpgcorejs/i18n/text/errorText.js"

/**
 * @type {import("./ErrorProcessorFunction.js").ErrorProcessorFunction}
 */
let _errorProcessor = errorProcessorDefault

/**
 * @param {import("./ErrorProcessorFunction.js").ErrorProcessorFunction
 *                                                     } errorProcessorFunction
 */
export function provideErrorProcessor(errorProcessorFunction) {
 _errorProcessor = errorProcessorFunction
}

/**
 * @template {{message:string} | null} ErrorType
 * @param {ErrorType} error
 */
export async function errorProcessor(error) {
 return _errorProcessor(error)
}

/**
 * Logs an error in the console and shows its message property (if any) in an
 * alert dialog.
 * @param {{[s:string]: string} | null} error error description.
 */
export async function errorProcessorDefault(error) {
 if (error === null) {
  console.error(errorText())
 } else {
  console.error(error)
 }
}