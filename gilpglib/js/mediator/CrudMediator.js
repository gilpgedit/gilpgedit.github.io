import { assertNotNullOrUndefined } from "../assertNotNullOrUndefined.js"
import { errorDisplay } from "../di/errorDisplay.js"
import { pageChangeDuration } from "../di/html/pageChangeDuration.js"
import { searchParamsNew } from "../di/html/searchParamsNew.js"
import { promiseNew } from "../di/promiseNew.js"
import { viewTransition } from "../html/viewTransition.js"
import { idNullText } from "../i18n/text/idNullText.js"
import { wait } from "../wait.js"
import { AddModelMediator } from "./AddModelMediator.js"
import { DisplayModelMediator } from "./DisplayModelMediator.js"
import { EditModelMediator } from "./EditModelMediator.js"

export const EDIT_PARAM = "edit"
export const EDIT_PARAM_VALUE = "true"

/**
 * @template IdType
 * @template ModelType
 */
export class CrudMediator {

 /**
  * @param {import("./CrudMediatorConfig.js")
  *                              .CrudMediatorConfig<IdType, ModelType>} config
  */
 constructor(config) {

  /**
   * @readonly
   */
  this.config = config
  this._modelAdded = this._modelAdded.bind(this)
  this._modelEdit = this._modelEdit.bind(this)
  this._modelDeleted = this._modelDeleted.bind(this)
  this._modelEdited = this._modelEdited.bind(this)
  this._modelCanceled = this._modelCanceled.bind(this)

  const params = searchParamsNew()
  this._id = config.getIdParamFunction(params)
  this._editParam = !!params.get(EDIT_PARAM)

 }

 init() {
  try {
   const config = this.config
   config.rootElement.innerHTML = ""
   if (!this._id) {
    this._addMediator = config.addMediatorFactory()
    this._addMediator.display(config.rootElement, this._modelAdded)
   } else if (this._editParam) {
    this._editMediator = config.editMediatorFactory()
    this._editMediator.display(config.rootElement, this._id, this._model,
     this._modelEdited, this._modelCanceled)
   } else {
    this._displayMediator = config.displayMediatorFactory()
    this._displayMediator.display(config.rootElement, this._id, this._model,
     this._modelEdit, this._modelDeleted)
   }
  } catch (error) {
   errorDisplay(error)
  }
 }

 /**
  * @private
  * @param {IdType} id
  * @param {ModelType} model
  */
 async _modelAdded(id, model) {
  try {
   if (this._addMediator) {
    this._model = model
    this._id = id
    await this._toDisplayState(this._addMediator)
    this._addMediator = undefined
   }
  } catch (error) {
   errorDisplay(error)
  }
 }

 /**
  * @private
  * @param {ModelType} model
  */
 async _modelEdited(model) {
  try {
   if (this._editMediator) {
    this._model = model
    await this._toDisplayState(this._editMediator)
    this._editMediator = undefined
   }
  } catch (error) {
   errorDisplay(error)
  }
 }

 async _modelCanceled() {
  try {
   if (this._editMediator) {
    await this._toDisplayState(this._editMediator)
    this._editMediator = undefined
   }
  } catch (error) {
   errorDisplay(error)
  }
 }

 /**
  * @private
  * @param {ModelType | undefined} model
  */
 async _modelEdit(model) {
  this._model = model
  if (this._displayMediator) {
   await this._toEditState(this._displayMediator)
   this._displayMediator = null
  }
 }

 /**
  * @protected
  */
 _modelDeleted() {
  history.replaceState(null, "", this.config.backUrl)
  location.href = this.config.backUrl
 }

 /**
  * @private
  * @param {AddModelMediator | DisplayModelMediator | EditModelMediator
  *                                                                  } mediator
  */
 _toDisplayState(mediator) {
  return promiseNew((resolve, reject) => {
   try {
    const config = this.config
    if (this._id) {
     const params = searchParamsNew()
     config.setIdParamFunction(params, this._id)
     params.delete(EDIT_PARAM)
     history.replaceState(null, "", "?" + params)
     viewTransition(async () => {
      try {
       config.rootElement.innerHTML = ""
       mediator.disposeMediator()
       this._displayMediator = config.displayMediatorFactory()
       await wait(pageChangeDuration())
       if (this._id) {
        this._displayMediator.display(config.rootElement, this._id, this._model,
         this._modelEdit, this._modelDeleted)
       }
       resolve(undefined)
      } catch (error) {
       reject(error)
      }
     })
    }
   } catch (error) {
    reject(error)
   }
  })
 }

 /**
  * @private
  * @param {AddModelMediator | DisplayModelMediator | EditModelMediator
  *                                                                  } mediator
  */
 async _toEditState(mediator) {
  return promiseNew((resolve, reject) => {
   try {
    const config = this.config
    const params = searchParamsNew()
    this.config.setIdParamFunction(params,
     assertNotNullOrUndefined(this._id, idNullText()))
    params.set(EDIT_PARAM, EDIT_PARAM_VALUE)
    history.replaceState(null, "", "?" + params)
    viewTransition(async () => {
     try {
      config.rootElement.innerHTML = ""
      mediator.disposeMediator()
      this._editMediator = this.config.editMediatorFactory()
      await wait(pageChangeDuration())
      if (this._id) {
       this._editMediator.display(config.rootElement, this._id, this._model,
        this._modelEdited, this._modelCanceled)
      }
      resolve(undefined)
     } catch (error) {
      reject(error)
     }
    })
   } catch (error) {
    reject(error)
   }
  })
 }

}