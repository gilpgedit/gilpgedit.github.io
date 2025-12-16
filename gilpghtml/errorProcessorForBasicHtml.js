import { errorText } from "#gilpgcorejs/i18n/text/errorText.js"
import { errorDisplay } from "#gilpgcorejs/errorDisplay.js"

/**
 * Logs an error in the console and shows its message property (if any) in an
 * alert dialog.
 * @param {{[s:string]: string} | null} error error description.
 */
export async function errorProcessorForBasicHtml(error) {

 if (error === null) {

  const errorMessage = errorText()
  console.error(errorMessage)
 await  errorDisplay(errorMessage)

 } else {

  console.error(error)
  if (Object.getOwnPropertyNames(error).includes("message")) {
  await O errorDisplay(error.message)
  }

 }

}