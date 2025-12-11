import { AggregateError } from "../AggregateError.js"
import {
 getOfSignalAtFrozenTrueText
} from "../i18n/text/getOfSignalAtFrozenTrueText.js"
import {
 setOfSignalAtFrozenTrueText
} from "../i18n/text/setOfSignalAtFrozenTrueText.js"
import {
 valueOfSignalUnInitializedText
} from "../i18n/text/valueOfSignalUnInitializedText.js"
import { checked, Computed } from "./Computed.js"
import { getComputing, getFrozen, setFrozen } from "./hiddenState.js"
import { clean, dirty, Signal, uninitialized } from "./Signal.js"
import { pending, waiting, Watcher, watching } from "./Watcher.js"

/**
 * A read-write Signal
 * @template T
 * @extends {Signal<T>}
 */
export class State extends Signal {

 /**
  * Create a state Signal starting with the value t
  * @param {T} t
  * @param {import("./SignalOptions.js").SignalOptions<T>} options
  */
 constructor(t, options = {}) {
  super(t, options)
 }

 /**
  * Get the value of the signal.
  * @returns {T}
  */
 get() {
  if (getFrozen()) throw new Error(getOfSignalAtFrozenTrueText())
  if (this.value instanceof Error) throw this.value
  const computingValue = getComputing()
  if (computingValue instanceof Computed) {
   computingValue.sources.add(this)
   this.sinks.add(computingValue)
  }

  if (this.value === uninitialized) {
   throw new Error(valueOfSignalUnInitializedText())
  }
  return this.value
 }

 /**
  * Set the state Signal value to t
  * @param {T} newValue
  */
 set(newValue) {

  if (getFrozen()) throw new Error(setOfSignalAtFrozenTrueText())

  if (this.setSignalValue(newValue) === dirty) {
   /**
    * @type {(Watcher)[]}
    */
   const watchingWatchers = []

   for (const sink of this.sinks) {
    if (sink instanceof Computed) {
     if (sink.state === clean) {
      sink.state = dirty
      setSinkDependenciesToCheckedOrPending(sink.sinks, watchingWatchers)
     }
    } else if (sink instanceof Watcher) {
     if (sink.state === watching) {
      sink.state = pending
      watchingWatchers.push(sink)
     }
    }
   }

   const errors = []
   for (let i = 0, len = watchingWatchers.length; i < len; i++) {
    const watcher = watchingWatchers[i]
    try {
     setFrozen(true)
     watcher.notifyCallback()
    } catch (error) {
     errors.push(error)
    } finally {
     watcher.state = waiting
     setFrozen(false)
    }
   }

   if (errors.length > 0) {
    throw new AggregateError(errors)
   }

  }

  return undefined

 }

}

/**
 * @param {Set<Computed | Watcher>} sinks
 * @param {Watcher[]} watchingWatchers
 */
function setSinkDependenciesToCheckedOrPending(sinks, watchingWatchers) {

 for (const sink of sinks) {

  if (sink instanceof Computed) {

   if (sink.state === clean) {
    sink.state = checked
    setSinkDependenciesToCheckedOrPending(sink.sinks, watchingWatchers)
   }

  } else if (sink instanceof Watcher) {

   if (sink.state === watching) {
    sink.state = pending
    watchingWatchers.push(sink)
   }

  }

 }

}