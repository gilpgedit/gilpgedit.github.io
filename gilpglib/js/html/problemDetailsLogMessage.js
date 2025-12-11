import { detailsCodeTemplate } from "../i18n/template/detailsCodeTemplate.js"
import { ProblemDetails } from "../ProblemDetails.js"

/**
 * @param {ProblemDetails} error
 */
export function problemDetailsLogMessage(error) {
 let message = error.title
 if (error.detail) {
  message += `\n\n${error.detail}`
 }
 message += detailsCodeTemplate(error.status)
 if (error.type) {
  message += ` ${error.type}`
 }
 return message
}