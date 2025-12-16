import { errorProcessor } from "./errorProcessor.js"

/**
 * @template ReturnType
 * @param {() => ReturnType} callback
 * @param {ReturnType} errorValue
 */
export async function tryCatch(callback, errorValue) {
 try {
  return callback()
 } catch (error) {
  await errorProcessor(error)
  return errorValue
 }
}