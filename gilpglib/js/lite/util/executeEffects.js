import { AggregateError } from "../../AggregateError.js"
import { effect } from "../../html/effect.js"

/**
 * @param {Map<() => any, () => any>} effects
 */
export function executeEffects(effects) {

 const keys = Array.from(effects.keys())
 const errors = []

 for (let i = 0, len = keys.length; i < len; i++) {
  const callback = keys[i]
  try {
   const dispose = effect(callback)
   effects.set(callback, dispose)
  } catch (error) {
   errors.push(error)
  }
 }

 if (errors.length > 0) {
  throw new AggregateError(errors)
 }
}