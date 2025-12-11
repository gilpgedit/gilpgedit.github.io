import { Computed } from "./Computed.js"
import { getComputing, setComputing } from "./hiddenState.js"
import { Signal } from "./Signal.js"
import { State } from "./State.js"
import { Watcher } from "./Watcher.js"

/*
* This namespace includes "advanced" features that are better to
* leave for framework authors rather than application developers.
* Analogous to `crypto.subtle`
* @namespace subtle
*/
export const subtle = {
 /**
  * Run a callback with all tracking disabled.
  * @template T
  * @param {() => T} cb
  * @returns {T}
  */
 untrack(cb) {
  let c = getComputing()
  setComputing(null)
  let returnValue = null
  try {
   returnValue = cb()
   setComputing(c)
  } finally {
   setComputing(c)
  }
  return returnValue
 },

 /**
  * Get the current computed signal which is tracking any signal reads, if any.
  * @returns {import("./Computed.js").Computed<any> | null}
  */
 currentComputed() {
  return getComputing()
 },

 /**
  * Returns ordered list of all signals which this one referenced
  * during the last time it was evaluated.
  * For a Watcher, lists the set of signals which it is watching.
  * @param {import("./Computed.js").Computed<any> | Watcher} s
  * @returns {(Signal<any>)[]}
  */
 introspectSources(s) {
  if (s instanceof Computed) {
   return Array.from(s.sources)
  } else if (s instanceof Watcher) {
   return Array.from(s.signals)
  } else {
   return []
  }
 },

 /**
  * Returns any
  * Computed signals which read this signal last time they were evaluated,
  * if that computed signal is (recursively) watched.
  * @param {Signal<any>} s
  * @returns {import("./Computed.js").Computed<any>[]}
  */
 introspectSinks(s) {
  if (s instanceof Computed) {
   return Array.from(s.sinks).filter(s => s instanceof Computed)
  } else if (s instanceof State) {
   return Array.from(s.sinks).filter(s => s instanceof Computed)
  } else {
   return []
  }
 },

 /**
  * True if this signal is "live", in that it is watched by a Watcher,
  * or it is read by a Computed signal which is (recursively) live.
  * @param {Signal<any>} s
  * @returns {boolean}
  */
 hasSinks(s) {
  return this.introspectSinks(s).length > 0
 },

 /**
  * True if this element is "reactive", in that it depends
  * on some other signal. A Computed where hasSources is false
  * will always return the same constant.
  * @param {import("./Computed.js").Computed<any> | Watcher} s
  * @returns {boolean}
  */
 hasSources(s) {
  return this.introspectSources(s).length > 0
 }

}
