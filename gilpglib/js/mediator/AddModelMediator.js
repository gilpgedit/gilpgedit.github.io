import { errorDisplay } from "../di/errorDisplay.js"
import { pageChangeDuration } from "../di/html/pageChangeDuration.js"
import { workEnd } from "../di/work/workEnd.js"
import { workStart } from "../di/work/workStart.js"
import { resizeAll } from "../html/resizeAll.js"
import { confirmDiscardText } from "../i18n/text/confirmDiscardText.js"
import { wait } from "../wait.js"
import { DiscardableMediator } from "./DiscardableMediator.js"

/**
 * @template IdType
 * @template ModelType
 */
export class AddModelMediator extends DiscardableMediator {

 /**
  * @param {import("./AddModelMediatorConfig.js").
  *                           AddModelMediatorConfig<IdType, ModelType>} config 
  */
 constructor(config) {
  super(config.confirmDiscardText || confirmDiscardText())
  /**
   * @readonly
   */
  this.config = config
  this.save = this.save.bind(this)
  this._requestFocus = this._requestFocus.bind(this)
 }

 /**
  * @param {Element} rootElement
  * @param {(id: IdType, model: ModelType) => any} modelAddedCallback
  */
 display(rootElement, modelAddedCallback) {
  try {

   /**
    * @private
    */
   this._modelAddedCallback = modelAddedCallback
   const config = this.config
   config.displayNewCallback(rootElement)
   this.downloadStuff(config)

  } catch (error) {

   errorDisplay(error)

  }
 }

 /**
  * @param {import("./AddModelMediatorConfig.js").
  *                           AddModelMediatorConfig<IdType, ModelType>} config 
  */
 async downloadStuff(config) {

  try {

   let stuff = {}

   if (config.getNewStuffFunction) {

    await wait(pageChangeDuration())
    try {
     await workStart()
     stuff = await config.getNewStuffFunction()
    } finally {
     await workEnd()
    }

   }

   config.displayNewStuffCallback(stuff)
   resizeAll()
   queueMicrotask(this._requestFocus)

  } catch (error) {

   errorDisplay(error)

  }

 }

 /**
  * @param {SubmitEvent} event
  */
 async save(event) {
  event.preventDefault()
  const target = event.target
  if (target instanceof HTMLFormElement) {

   let result = undefined
   try {
    await workStart()
    result = await this.config.addFunction(target)
   } catch (error) {
    errorDisplay(error)
   } finally {
    await workEnd()
   }

   if (this._modelAddedCallback && result) {
    this.clean = true
    this._modelAddedCallback(result.id, result.model)
   }

  }

 }

 /**
  * @private
  */
 _requestFocus() {
  const config = this.config
  if (config.focusElement instanceof HTMLElement) {
   config.focusElement.focus()
  }
 }

 disposeMediator() {
  const config = this.config
  config.disposeNewCallback && config.disposeNewCallback()
 }

}