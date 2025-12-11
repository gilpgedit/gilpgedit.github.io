import {
 gilpgrequestdiscard_event
} from "../const/gilpgrequestdiscard_event.js"

export class DiscardableMediator {

 /**
  * @param {string} confirmDiscardText
  */
 constructor(confirmDiscardText) {
  /**
   * @private
   */
  this._confirmDiscardText = confirmDiscardText
  /**
   * @private
   */
  this._clean = true

  this._beforeUnload = this._beforeUnload.bind(this)
  this._requestDiscard = this._requestDiscard.bind(this)

  addEventListener("beforeunload", this._beforeUnload)
  addEventListener(gilpgrequestdiscard_event, this._requestDiscard)

 }

 get clean() {
  return this._clean
 }

 set clean(clean) {
  this._clean = clean
 }

 disposeMediator() {
  removeEventListener("beforeunload", this._beforeUnload)
  removeEventListener(gilpgrequestdiscard_event, this._requestDiscard)
 }

 canDiscard() {
  return this.clean || this._confirmDiscard()
 }

 /**
  * @private
  */
 _confirmDiscard() {
  return confirm(this._confirmDiscardText)
 }

 /**
  * @private
  * @param {Event} event
  */
 _requestDiscard(event) {
  if (!this.canDiscard()) {
   event.preventDefault()
  }
 }

 /**
  * @private
  * @param {BeforeUnloadEvent} event
  */
 _beforeUnload(event) {
  if (!this.clean) {
   event.preventDefault()
  }
 }

}