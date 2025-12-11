import { QueryDocumentSnapshot } from "firebase/firestore"

/**
 * @template IdType
 * @template SortType
 */
export class FirestorePaging {

 /**
  * @param {number} pageLength
  * @param {(formElement: HTMLFormElement, pageLength:number,
  *   previousSnapshot: QueryDocumentSnapshot | null) => Promise<{
  *     array: import("../html/ListModel.js").ListModel<IdType, SortType>[],
  *     ref: QueryDocumentSnapshot | null
  *    }>} pageQueryFunction
  */
 constructor(pageLength, pageQueryFunction) {
  /**
   * @private
   * @readonly
   */
  this._pageLength = pageLength
  /**
   * @private
   */
  this._pageQueryFunction = pageQueryFunction
  /**
   * @private
   * @type {HTMLFormElement | null}
   */
  this._formElement = null
  /**
   * @private
   * @type {QueryDocumentSnapshot | null}
   */
  this._previousSnapshot = null
 }

 /**
  * @returns {number}
  */
 get pageLength() {
  return this._pageLength
 }

 /**
  * @param {HTMLFormElement} formElement
  */
 async doFilter(formElement) {
  const page = await this._pageQueryFunction(formElement, this.pageLength, null)
  this._formElement = formElement
  this._previousSnapshot = page.ref
  return page.array
 }

 async nextPage() {
  if (this._formElement !== null) {
   const page = await this._pageQueryFunction(this._formElement,
    this.pageLength, this._previousSnapshot)
   this._previousSnapshot = page.ref
   return page.array
  } else {
   return []
  }
 }
}