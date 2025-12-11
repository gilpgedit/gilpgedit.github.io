import { headersText } from "../i18n/text/headersText.js"

/**
 * @param {any} message
 * @param {import("../ProblemDetails.js").ProblemDetails} error
 */
export function problemDetailsLog(message, error) {
 console.error(message)
 console.error(error)
 console.error(headersText())
 error.headers.forEach((value, key) => console.error(key, "=", value))
}
