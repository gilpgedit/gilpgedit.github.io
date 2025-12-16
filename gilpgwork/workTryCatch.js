import { errorProcessor } from "#gilpgcorejs/errorProcessor.js"
import { workEnd } from "./workEnd.js"
import { workStart } from "./workStart.js"

/**
 * @template PromiseType
 * @param {(() => Promise<PromiseType>) | Promise<PromiseType>
 *                                                          } callbackOrPromise
 * @param {PromiseType} errorValue
 */
export async function workTryCatch(callbackOrPromise, errorValue) {
 try {
  await workStart()
  if (typeof callbackOrPromise === "function") {
   return await callbackOrPromise()
  } else {
   return await callbackOrPromise
  }
 } catch (error) {
  await errorProcessor(error)
  return errorValue
 } finally {
  await workEnd()
 }
}