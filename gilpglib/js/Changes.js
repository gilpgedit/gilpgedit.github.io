import { mapNew } from "./di/mapNew.js"

/**
 * @template K
 * @template M
 */
export class Changes {
 constructor() {
  /**
   * @readonly
   * @type {Map<K, M>}
   */
  this.previous = mapNew()
  /** @type {[K, M][]} */
  this.aliveOnes = []
  /** @type {M[]} */
  this.newOnes = []
 }

 /**
  * @param {K} id
  * @param {M} model
  */
 registerPrevious(id, model) {
  if (id) {
   this.previous.set(id, model)
  }
 }

 /**
  * @param {K} id
  * @param {M} model
  */
 async change(id, model) {
  if (id && this.previous.has(id)) {
   this.previous.delete(id)
   this.aliveOnes.push([id, model])
  } else {
   this.newOnes.push(model)
  }
 }
}