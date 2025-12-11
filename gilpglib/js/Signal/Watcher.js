import { setNew } from "../di/setNew.js"
import { unwatchArgumentInvalidText } from "../i18n/text/unwatchArgumentInvalidText.js"
import { unwatchAtFrozenTrueText } from "../i18n/text/unwatchAtFrozenTrueText.js"
import { watchArgumentInvalidText } from "../i18n/text/watchArgumentInvalidText.js"
import { watchAtFrozenTrueText } from "../i18n/text/watchAtFrozenTrueText.js"
import { checked, Computed } from "./Computed.js"
import { getFrozen, setFrozen } from "./hiddenState.js"
import { dirty, Signal } from "./Signal.js"

export const watching = Symbol.for("watching")
export const pending = Symbol.for("pending")
export const waiting = Symbol.for("waiting")

/**
 * The state of a Watcher may be one of the following:
 * <dl>
 * <dt>~waiting~</dt>
 * <dd>
 * The notify callback has been run, or the Watcher is new, but is not actively
 * watching any signals.
 * </dd>
 * <dt>~watching~</dt>
 * <dd>
 * The Watcher is actively watching signals, but no changes have yet happened
 * which would necessitate a notify callback.
 * </dd>
 * <dt>~pending~</dt>
 * <dd>
 * A dependency of the Watcher has changed, but the notify callback has not yet
 * been run.
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
 * <td>~waiting~</td>
 * <td>~watching~</td>
 * <td>The Watcher's watch method has been called.</td>
 * <td>Method: Signal.subtle.Watcher.prototype.watch(...signals)</td>
 * </tr>
 * <tr>
 * <td>2</td>
 * <td>~watching~</td>
 * <td>~waiting~</td>
 * <td>
 * The Watcher's unwatch method has been called, and the last watched signal
 * has been removed.
 * </td>
 * <td>Method: Signal.subtle.Watcher.prototype.unwatch(...signals)</td>
 * </tr>
 * <tr>
 * <td>3</td>
 * <td>~watching~</td>
 * <td>~pending~</td>
 * <td>A watched signal may have changed value.</td>
 * <td>Method: Signal.State.prototype.set(newValue)</td>
 * </tr>
 * <tr>
 * <td>4</td>
 * <td>~pending~</td>
 * <td>~waiting~</td>
 * <td>The notify callback has been run.</td>
 * <td>Method: Signal.State.prototype.set(newValue)</td>
 * </tr>
 */
export class Watcher {

 /**
  * When a (recursive) source of Watcher is written to, call this callback,
  * if it hasn't already been called since the last `watch` call.
  * No signals may be read or written during the notify.
  * Callback is called with this watcher as the this value.
  * @param {(this: Watcher) => void} notify
  */
 constructor(notify) {
  /**
   * May be ~watching~, ~pending~ or ~waiting~
   * @type {watching | pending | waiting}
   */
  this.state = waiting
  /**
   * An ordered set of Signals which this Watcher is watching
  * @readonly
  * @type {Set<Signal>}
  */
  this.signals = setNew()
  /**
  * The callback which is called when something changes.
  * Set to the first parameter passed to the constructor.
  * @readonly
  * @type {(this: Watcher) => void}
  */
  this.notifyCallback = notify.bind(this)
 }

 /**
  * Add these signals to the Watcher's set, and set the watcher to run its
  * notify callback next time any signal in the set (or one of its dependencies)
  * changes.
  * Can be called with no arguments just to reset the "notified" state, so that
  * the notify callback will be invoked again.
  * @param {Signal[]} s
  */
 watch(...s) {
  if (getFrozen()) throw new Error(watchAtFrozenTrueText())
  for (let i = 0, len = s.length; i < len; i++)
   if (!(s[i] instanceof Signal)) throw new Error(watchArgumentInvalidText())
  for (let i = 0, len = s.length; i < len; i++) {
   const signal = s[i]
   this.signals.add(signal)
   if (!signal.sinks.has(this)) {
    signal.sinks.add(this)
    setFrozen(true)
    signal.watched && signal.watched()
    setFrozen(false)
   }
  }
  if (this.state === waiting) {
   this.state = watching
  }
 }

 /**
  * Remove these signals from the watched set (e.g., for an effect which is
  * disposed)
  * @param {Signal[]} s
  */
 unwatch(...s) {
  if (getFrozen()) throw new Error(unwatchAtFrozenTrueText())
  for (let i = 0, len = s.length; i < len; i++)
   if (!(s[i] instanceof Signal)) throw new Error(unwatchArgumentInvalidText())
  for (let i = 0, len = s.length; i < len; i++) {
   const signal = s[i]
   this.signals.delete(signal)
   signal.sinks.delete(this)
   setFrozen(true)
   signal.unwatched && signal.unwatched()
   setFrozen(false)
  }
  if (this.signals.size === 0 && this.state === watching) {
   this.state = watching
  }
 }

 /**
  * Return an Array containing the subset of signals which are Computed Signals
  * in the states ~dirty~.
  * @returns {Computed<any>[]}
  */
 getPending() {
  const pending = []
  for (const signal of this.signals) {
   if (signal instanceof Computed
    && (signal.state === dirty || signal.state === checked)) {
    pending.push(signal)
   }
  }
  return pending
 }

}