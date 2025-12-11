import { setNew } from "../di/setNew.js"
import {
 computedDependsOnEffectText
} from "../i18n/text/computedDependsOnEffectText.js"
import {
 getOfComputedWhenComputingText
} from "../i18n/text/getOfComputedWhenComputingText.js"
import {
 getOfSignalAtFrozenTrueText
} from "../i18n/text/getOfSignalAtFrozenTrueText.js"
import {
 valueOfSignalUnInitializedText
} from "../i18n/text/valueOfSignalUnInitializedText.js"
import { getComputing, getFrozen, setComputing } from "./hiddenState.js"
import { clean, dirty, Signal, uninitialized } from "./Signal.js"
import { Watcher } from "./Watcher.js"

export const checked = Symbol.for("checked")
export const computing = Symbol.for("computing")

/**
 * A Signal which is a formula based on other Signals.
 * @template T
 * @extends {Signal<T>}
 */
export class Computed extends Signal {

 /**
  * Create a Signal which evaluates to the value returned by the callback.
  * Callback is called with this signal as the this value.
  * 
  * Effects are Computed with at least one Watcher sink. 
  * 
  * The state of a Computed Signal may be one of the following:
  * <dl>
  * <dt>~clean~</dt>
  * <dd>The Signal's value is present and known not to be stale.</dd>
  * <dt>~checked~</dt>
  * <dd>
  * An (indirect) source of this Signal has changed; this Signal has a value but
  * it may be stale. Whether or it not is stale will be known only when all
  * immediate sources have been evaluated.
  * </dd>
  * <dt>~computing~</dt>
  * <dd>
  * This Signal's callback is currently being executed as a side-effect of a
  * .get() call.
  * </dd>
  * <dt>~dirty~</dt>
  * <dd>
  * Either this Signal has a value which is known to be stale, or it has never
  * been evaluated.
  * </dd>
  * </dl>
  * 
  * The transitions are:
  * 
  * <table>
  * <tr>
  * <th>Number</th><th>From</th><th>To</th><th>Condition</th><th>Algorithm</th>
  * </tr>
  * <tr>
  * <td>1</td>
  * <td>~checked~</td>
  * <td>~dirty~</td>
  * <td>
  * An immediate source of this signal, which is a computed signal, has been
  * evaluated, and its value has changed.
  * </td>
  * <td>Algorithm: recalculate dirty computed Signal</td>
  * </tr>
  * <tr>
  * <td>2</td>
  * <td>~clean~</td>
  * <td>~dirty~</td>
  * <td>
  * An immediate source of this signal, which is a State, has been set, with a
  * value which is not equal to its previous value.
  * </td>
  * <td>Method: Signal.State.prototype.set(newValue)</td>
  * </tr>
  * <tr>
  * <td>3</td>
  * <td>~clean~</td>
  * <td>~checked~</td>
  * <td>
  * A recursive, but not immediate, source of this signal, which is a State, has
  * been set, with a value which is not equal to its previous value.
  * </td>
  * <td>Method: Signal.State.prototype.set(newValue)</td>
  * </tr>
  * <tr>
  * <td>4</td>
  * <td>~dirty~</td>
  * <td>~computing~</td>
  * <td>We are about to execute the callback.</td>
  * <td>Algorithm: recalculate dirty computed Signal</td>
  * </tr>
  * <tr>
  * <td>5</td>
  * <td>~computing~</td>
  * <td>~clean~</td>
  * <td>
  * The callback has finished evaluating and either returned a value or thrown
  * an exception.
  * </td>
  * <td>Algorithm: recalculate dirty computed Signal</td>
  * </tr>
  * <tr>
  * <td>6</td>
  * <td>~checked~</td>
  * <td>~clean~</td>
  * <td>
  * All immediate sources of this signal have been evaluated, and all have been
  * discovered unchanged, so we are now known not to be stale.
  * </td>
  * <td>Algorithm: recalculate dirty computed Signal</td>
  * </tr>
  * </table>
  * @param {(this: Computed<T>) => T} callback
  * @param {import("./SignalOptions.js").SignalOptions<T>} options
  */
 constructor(callback, options = {}) {
  super(uninitialized, options)
  /**
  * The callback which is called to get the computed Signal's value.
  * Set to the first parameter passed to the constructor.
  * @type {(this: Computed<T>) => T}
  */
  this.callback = callback.bind(this)
  /**
   * May be ~clean~, ~checked~, ~computing~, or ~dirty~.
   * @type {clean | checked | computing | dirty}
   */
  this.state = dirty
  /**
   * An ordered set of Signals which this Signal depends on.
   * @readonly
   * @type {Set<Signal<any>>}
   */
  this.sources = setNew()
 }

 /**
  * Get the value of the signal
  * @returns {T}
  */
 get() {

  if (getFrozen()) throw new Error(getOfSignalAtFrozenTrueText())
  if (this.state === computing)
   throw new Error(getOfComputedWhenComputingText())
  let computingValue = getComputing()
  if (computingValue instanceof Computed) {
   for (const sink of this.sinks)
    if (sink instanceof Watcher) throw new Error(computedDependsOnEffectText())
   computingValue.sources.add(this)
   this.sinks.add(computingValue)
  }

  while (this.state !== clean) {
   const signal = this.findFirstDirtySource()
   signal.recalculateDirtyComputedSignal()
  }

  if (this.value === uninitialized) {
   throw new Error(valueOfSignalUnInitializedText())
  }
  if (this.value instanceof Error) {
   throw this.value
  }

  return this.value

 }

 /**
  * Recurse up via sources to find the deepest, left-most (i.e. earliest
  * observed) recursive source which is a Computed Signal marked ~dirty~
  * (cutting off search when hitting a ~clean~ Computed Signal, and including
  * this Computed Signal as the last thing to search).
  * @returns {Computed<any>}
  */
 findFirstDirtySource() {
  for (const source of this.sources) {
   if (source instanceof Computed) {
    if (source.state === clean) {
     continue
    } else if (source.state === dirty) {
     return source
    } else {
     return source.findFirstDirtySource()
    }
   }
  }
  return this
 }

 recalculateDirtyComputedSignal() {
  this.sources.clear()
  const previousComputingValue = getComputing()
  setComputing(this)
  this.state = computing
  /**
   * @type {T | Error}
   */
  let value
  try {
   value = this.callback()
  } catch (error) {
   value = error
  }
  setComputing(previousComputingValue)
  const setSignalValueResult = this.setSignalValue(value)
  this.state = clean
  if (setSignalValueResult === dirty) {
   // If that algorithm returned ~dirty~: mark all sinks of this Signal as ~dirty~
   //  (previously, the sinks may have been a mix of checked and dirty).
   //  (Or, if this is unwatched, then adopt a new generation number to indicate
   //  dirtiness, or something like that.)
   for (const sink of this.sinks) {
    if (sink instanceof Computed) {
     sink.state = dirty
    }
   }
  } else {
   markCleanSinks(this)
  }

 }

}

/**
 * For each ~checked~ sink of this Signal, if all of that Signal's sources are
 * now clean, then mark that Signal as ~clean~ as well.
 * Apply this cleanup step to further sinks recursively, to any newly clean
 * Signals which have checked sinks. (Or, if this is unwatched, somehow indicate
 * the same, so that the cleanup can proceed lazily.)
 * @param {Computed<any>} signal
 */
function markCleanSinks(signal) {
 for (const sink of signal.sinks) {
  if (sink instanceof Computed && sink.state === checked) {
   let allClean = true
   for (const source of sink.sources) {
    if (source instanceof Computed && source.state !== clean) {
     allClean = false
     break
    }
   }
   if (allClean) {
    sink.state = clean
    markCleanSinks(sink)
   }
  }
 }

}