import { ABSTRACT } from "../const/ABSTRACT.js"
import { promiseNew } from "../di/promiseNew.js"
import { workEnd } from "../di/work/workEnd.js"
import { PagingListMediator } from "./PagingListMediator.js"

/**
 * @template IdType
 * @template SortType
 * @template ValueType
 * @extends {PagingListMediator<IdType>}
 */
export class PagingDialogMediator extends PagingListMediator {
 unselectAll() {
  throw new Error(ABSTRACT)
 }

 updateSelection() { throw new Error(ABSTRACT) }

 /**
  * @param {ValueType | undefined} value
  * @param {import("../html/Paging.js").Paging<IdType, SortType>} paging
  */
 constructor(value, paging) {

  super(paging)

  this.value = value
  this.modified = false
  this.nofilter = false
  this.header = ""
  this.alreadyShown = false

  this.checkClick = this.checkClick.bind(this)
  this.close = this.close.bind(this)

 }


 /**
  * @param {HTMLDialogElement} dialog
  */
 addEventListeners(dialog) {
  dialog.addEventListener("click", this.checkClick)
 }

 /**
  * @param {HTMLDialogElement} dialog
  */
 removeEventListeners(dialog) {
  dialog.removeEventListener("click", this.checkClick)
 }


 /**
  * @param {MouseEvent} event
  */
 checkClick(event) {
  if (this._form) {
   const rect = this._form.getBoundingClientRect()
   const x = event.clientX
   const y = event.clientY
   if (x > 0 && y > 0
    && (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom)) {
    this.close()
   }
  }
 }

 /**
  * @param {HTMLDialogElement} dialog
  * @param {ValueType | undefined} value
  * @param {boolean} prefetch
  * @param {string} header
  */
 display(dialog, value, prefetch, header) {

  /**
   * @private
   */
  this._dialog = dialog

  const promise = promiseNew(
   /**
    * @param {(value: {value: ValueType | undefined, modified: boolean}) => void
    *                                                                 } resolve 
    * @param {(reason?: any) => void} reject 
    */
   (resolve, reject) => {

    try {

     this.modified = false
     this.value = value
     this.header = header

     this.updateSelection()

     if (!dialog.open) {

      dialog.showModal()

      dialog.addEventListener("close", async () => {
       await workEnd()
       this.removeEventListeners(dialog)
       resolve({ value: this.value, modified: this.modified })
      },
       { once: true })

     }

     if (!this.alreadyShown) {
      this.alreadyShown = true
      if (prefetch) {
       this.firstPage()
      }
     }

     queueMicrotask(() => this.addEventListeners(dialog))

    } catch (error) {

     reject(error)

    }

   })

  return promise

 }

 close() {
  if (this._dialog) {
   this._dialog.close()
  }
 }

}