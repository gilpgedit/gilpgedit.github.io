import { Signal } from "./Signal.js"

export const watched = Symbol.for("watched")
export const unwatched = Symbol.for("unwatched")

/**
 * Optional configuration for signals.
 * <dl>
 *  <dt>equals</dt>
 *  <dd>
 *    Custom comparison function between old and new value. Default: Object.is.
 *    The signal is passed in as the this value for context.
 *  </dd>
 *  <dt>watched</dt>
 *  <dd>
 *    Callback called when isWatched becomes true, if it was previously false
 *  </dd>
 *  <dt>unwatched</dt>
 *  <dd>
 *    Callback called whenever isWatched becomes false, if it was previously true
 *  </dd>
 * </dl>
 * @template T
 * @typedef {{
*   equals?: (this: Signal<T>, t: T, t2: T) => boolean,
*   [watched]?: (this: Signal<T>) => void,
*   [unwatched]?: (this: Signal<T>) => void,
*  }} SignalOptions
*/