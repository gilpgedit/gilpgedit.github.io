import { Computed } from "./Computed.js"

/**
 * The innermost computed or effect Signal currently being reevaluated due to a
 * .get or .run call, or null. 
 * @type {Computed | null}
 */
let _computing = null

/**
 * Boolean denoting whether there is a callback currently executing which
 * requires that the graph not be modified.
 */
let _frozen = false

/**
 * An incrementing integer, starting at 0, used to track how current a value is
 * while avoiding circularities.
 */
export let generation = 0

export function getFrozen() {
 return _frozen
}

/**
 * @param {boolean} frozen
 */
export function setFrozen(frozen) {
 _frozen = frozen
}

export function getComputing() {
 return _computing
}

/**
 * @param {Computed | null} computing
 */
export function setComputing(computing) {
 _computing = computing
}