import { errorText } from "../i18n/text/errorText.js"
import { ProblemDetails } from "../ProblemDetails.js"
import { problemDetailsLog } from "./problemDetailsLog.js"
import { problemDetailsLogMessage } from "./problemDetailsLogMessage.js"

/**
 * Logs an error in the console and shows its content in an alert dialog.
 * @param { ProblemDetails | {message:string} | null } error error description.
 */
export function errorDisplayBasicFunction(error) {

 if (error === null) {

  const errorMessage = errorText()
  console.error(errorMessage)
  alert(errorMessage)

 } else if (error instanceof ProblemDetails) {

  let message = problemDetailsLogMessage(error)
  problemDetailsLog(message, error)
  alert(message)

 } else {

  console.error(error)
  alert(error.message)

 }

}