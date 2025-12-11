import { AggregateError } from "../../AggregateError.js"
import { DO_NOTHING_FUNCTION } from "../../const/DO_NOTHING_FUNCTION.js"

/**
 * @param {Map<() => any, () => any>} effects
 */
export function disposeEffects(effects) {
 const entries = Array.from(effects.entries())
 const errors = []

 for (let i = 0, len = entries.length; i < len; i++) {
  const [callback, dispose] = entries[i]
  try {
   dispose()
  } catch (error) {
   errors.push(error)
  }
  effects.set(callback, DO_NOTHING_FUNCTION)
 }

 if (errors.length > 0) {
  throw new AggregateError(errors)
 }
}