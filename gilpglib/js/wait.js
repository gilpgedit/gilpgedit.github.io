import { promiseNew } from "./di/promiseNew.js"

/**
 * @param {number} milliseconds tiempo de espera en milisegundos
 */
export function wait(milliseconds) {
 return promiseNew(resolve => {
  if (milliseconds > 0) {
   setTimeout(resolve, milliseconds)
  } else {
   resolve(undefined)
  }
 })
}