import { ABSTRACT } from "../const/ABSTRACT.js"
import { setNew } from "../di/setNew.js"
import { unwatched, watched } from "./SignalOptions.js"

export const uninitialized = Symbol.for("uninitialized")
export const clean = Symbol.for("clean")
export const dirty = Symbol.for("dirty")

/**
 * @template T
 */
export class Signal {

 /**
  * @param {T | Error | uninitialized} value
  * @param {import("./SignalOptions.js").SignalOptions<T>} options
  */
 constructor(value, options) {
  /**
   * State: Computed value of the signal.
   * Computed: The previous cached value of the Signal, or uninitialized for a
   * never-read computed Signal. The value may be an exception which gets
   * rethrown when the value is read. Always undefined for effect signals.
   * @protected
   * @type {T | Error | uninitialized}
   */
  this.value = value
  /**
   * The comparison function used when changing values.
   * The equals method provided in the options.
   * Custom comparison function between old and new value. Default: Object.is.
   * The signal is passed in as the this value for context.
   * @readonly
   * @type {(this: Signal<T>, t: T, t2: T) => boolean}
   */
  this.equals = (options.equals ? options.equals : Object.is).bind(this)
  /**
   * The callback to be called when the signal becomes observed by an effect.
   * Callback called when isWatched becomes true, if it was previously false
   * @readonly
   */
  this.watched = options[watched]
  /**
   * The callback to be called when the signal is no longer observed by an
   * effect.
   * Callback called whenever isWatched becomes false, if it was previously true
   * @readonly
   */
  this.unwatched = options[unwatched]
  /**
   * State: An ordered set of Signals which depend on this Signal.
   * Computed: Set of watched signals which depend on this one.
   * @readonly
   * @type {Set<import("./Computed.js").Computed<any> |
   *                                           import("./Watcher.js").Watcher>}
   */
  this.sinks = setNew()
 }

 /**
  * Get the value of the signal.
  * @abstract
  * @returns {T}
  */
 get() { throw new Error(ABSTRACT) }

 /**
  * @param {T | Error} value
  */
 setSignalValue(value) {
  let newValue = value
  if (!(value instanceof Error)) {
   try {
    const oldValue = this.value
    if (oldValue !== uninitialized && !(oldValue instanceof Error)
     && this.equals(oldValue, value)) {
     return clean
    }
   } catch (error) {
    newValue = error
   }
  }
  this.value = newValue
  return dirty
 }

}