import { errorDisplay } from "../di/errorDisplay.js"
import { confirmMessage } from "../di/html/confirmMessage.js"
import { pageChangeDuration } from "../di/html/pageChangeDuration.js"
import { workEnd } from "../di/work/workEnd.js"
import { workStart } from "../di/work/workStart.js"
import { resizeAll } from "../html/resizeAll.js"
import { confirmDeleteText } from "../i18n/text/confirmDeleteText.js"
import { idParameterMissingText } from "../i18n/text/idParameterMissingText.js"
import { wait } from "../wait.js"

/**
 * @template IdType
 * @template ModelType
 */
export class DisplayModelMediator {

 /**
  * @param {import("./DisplayModelMediatorConfig.js").
  *                       DisplayModelMediatorConfig<IdType, ModelType>} config
  */
 constructor(config) {
  /**
   * @readonly
   */
  this.config = config
  this.edit = this.edit.bind(this)
  this.delete = this.delete.bind(this)
 }

 /**
  * @param {Element} rootElement
  * @param {IdType} id
  * @param {ModelType | undefined} model
  * @param {(model: ModelType | undefined) => any} modelEditCallback
  * @param {() => any} modelDeletedCallback
  */
 async display(rootElement, id, model, modelEditCallback, modelDeletedCallback) {
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
   this._modelEditCallback = modelEditCallback
   /**
    * @private
   */
   this._modelDeletedCallback = modelDeletedCallback
   const config = this.config
   config.displayDisplayCallback(rootElement)
   this.downloadModel(config)

  } catch (error) {

   errorDisplay(error)

  }

 }

 /**
  * @param {import("./DisplayModelMediatorConfig.js").
  *                       DisplayModelMediatorConfig<IdType, ModelType>} config 
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

   config.displayModelDisplayCallback(this._model)
   resizeAll()

  } catch (error) {

   errorDisplay(error)

  }

 }

 edit() {
  if (this._modelEditCallback) {
   this._modelEditCallback(this._model)
  }
 }

 async delete() {
  const id = this._id
  const model = this._model
  const config = this.config
  let deleted = false
  const confirmFunction = config.confirmDeleteFunction || confirmDeleteText
  if (id && model && await confirmMessage(confirmFunction(model))) {

   try {
    await config.deleteFunction(id, model)
    deleted = true
   } catch (error) {
    errorDisplay(error)
   }

  }

  if (deleted && this._modelDeletedCallback) {
   this._modelDeletedCallback()
  }

 }

 disposeMediator() {
  const config = this.config
  config.disposeDisplayCallback && config.disposeDisplayCallback()
 }

}