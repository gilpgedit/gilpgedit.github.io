import { errorDisplay } from "../di/errorDisplay.js"
import { pageChangeDuration } from "../di/html/pageChangeDuration.js"
import { workEnd } from "../di/work/workEnd.js"
import { workStart } from "../di/work/workStart.js"
import { resizeAll } from "../html/resizeAll.js"
import { confirmDiscardText } from "../i18n/text/confirmDiscardText.js"
import { idParameterMissingText } from "../i18n/text/idParameterMissingText.js"
import { wait } from "../wait.js"
import { DiscardableMediator } from "./DiscardableMediator.js"

/**
 * @template IdType
 * @template ModelType
 */
export class EditModelMediator extends DiscardableMediator {

 /**
  * @param {import("./EditModelMediatorConfig.js").
  *                          EditModelMediatorConfig<IdType, ModelType>} config 
  */
 constructor(config) {
  super(config.confirmDiscardText || confirmDiscardText())
  /**
   * @readonly
   */
  this.config = config
  this.save = this.save.bind(this)
  this.cancel = this.cancel.bind(this)
  this._requestFocus = this._requestFocus.bind(this)
 }

 /**
  * @param {Element} rootElement
  * @param {IdType} id
  * @param {ModelType | undefined} model
  * @param {(model: ModelType) => any} modelEditedCallback
  * @param {(() => Promise<any>)} modelCanceledCallback
  */
 display(rootElement, id, model, modelEditedCallback, modelCanceledCallback) {
  try {

   /**
   * @private
   */
   this._id = id
   /**
  * @private
  */
   this._model = model
   /**
    * @private
    */
   this._modelEditedCallback = modelEditedCallback
   /**
    * @private
    */
   this._modelCanceledCallback = modelCanceledCallback
   const config = this.config
   config.displayEditCallback(rootElement)
   this.downloadModel(config)

  } catch (error) {

   errorDisplay(error)

  }
 }

 /**
  * @param {import("./EditModelMediatorConfig.js").
  *                          EditModelMediatorConfig<IdType, ModelType>} config 
  */
 async downloadModel(config) {

  try {

   if (!this._id) throw new Error(idParameterMissingText())

   if (!this._model) {
    await wait(pageChangeDuration())
    try {
     await workStart()
     this._model = await config.getFunction(this._id)
    } finally {
     await workEnd()
    }
   }

   config.displayModelEditCallback(this._model)
   resizeAll()
   queueMicrotask(this._requestFocus)

  } catch (error) {

   errorDisplay(error)

  }

 }

 cancel() {
  let canceled = false
  try {
   if (this.canDiscard()) {
    canceled = true
   }
  } catch (error) {
   errorDisplay(error)
  }
  if (this._modelCanceledCallback && canceled) {
   this.clean = true
   this._modelCanceledCallback()
  }
 }

 /**
  * @param {SubmitEvent} event
  */
 async save(event) {
  event.preventDefault()
  const target = event.target
  if (target instanceof HTMLFormElement) {

   let model = undefined
   try {
    await workStart()
    model = await this.config.setFunction(target)
   } catch (error) {
    errorDisplay(error)
   } finally {
    await workEnd()
   }

   if (this._modelEditedCallback && model) {
    this.clean = true
    this._modelEditedCallback(model)
   }

  }

 }

 /**
  * @private
  */
 _requestFocus() {
  if (this.config.focusElement instanceof HTMLElement) {
   this.config.focusElement.focus()
  }
 }

 disposeMediator() {
  const config = this.config
  config.disposeEditCallback && config.disposeEditCallback()
 }

}