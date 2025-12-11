import { assertNotNullOrUndefined } from "../assertNotNullOrUndefined.js"
import { row_class } from "../const/row_class.js"
import { selected_class } from "../const/selected_class.js"
import { value_attribute } from "../const/value_attribute.js"
import { errorDisplay } from "../di/errorDisplay.js"
import { noScript } from "../html/noScript.js"
import {
 listPropertUndefinedText
} from "../i18n/text/listPropertUndefinedText.js"
import { span } from "../lite/span.js"
import { stringOrEmpty } from "../stringOrEmpty.js"
import { PagingDialogMediator } from "./PagingDialogMediator.js"

/**
 * @template IdType
 * @extends {PagingDialogMediator<IdType, any,
 *          import("../html/ListModel.js").ListModel<IdType, any> | undefined>}
 */
export class SelectOneDialogMediator extends PagingDialogMediator {
 /**
  * @param {import("../html/Paging.js").Paging<IdType, any>} paging
  * @param {import("../IdentityFunction.js").
 *                   IdentityFunction<string, import("../html/ListModel.js").
 *                        ListModel<IdType, any> | undefined>} identityFunction
 */
 constructor(paging, identityFunction) {
  super(undefined, paging)
  /**
   * @private
   * @readonly
   */
  this._identityFunction = identityFunction
  this._selected = this._selected.bind(this)
  this.unselectAll = this.unselectAll.bind(this)
 }

 /**
  * @override
  */
 unselectAll() {
  try {
   this.value = undefined
   this.modified = true
   this._removeSelectedClass()
  } catch (error) {
   errorDisplay(error)
  }
 }

 /**
  * @override
  */
 updateSelection() {
  const list = assertNotNullOrUndefined(this.list, listPropertUndefinedText())
  /**
   * @type {NodeListOf<HTMLElement>}
   */
  const rows = list.querySelectorAll(row_class)
  if (this.value === null) {
   for (let i = 0, len = rows.length; i < len; i++) {
    rows.item(i).classList.remove(selected_class)
   }
  } else {
   for (let i = 0, len = rows.length; i < len; i++) {
    const row = rows.item(i)
    if (this._identityFunction(this.value) === row.dataset[value_attribute]) {
     row.classList.add(selected_class)
    } else {
     row.classList.remove(selected_class)
    }
   }
  }
 }

 /**
  * @private
  */
 _removeSelectedClass() {
  const list = assertNotNullOrUndefined(this.list, listPropertUndefinedText())
  const selectedElement = list.querySelector(`.${selected_class}`)
  if (selectedElement) {
   selectedElement.classList.remove(selected_class)
  }
 }

 /**
  * @override
  * @param {HTMLUListElement | HTMLOListElement} list
  * @param {import("../html/ListModel.js").ListModel<IdType, any>[]} models
  */
 displayMoreModels(list, models) {

  if (this.value === null) {

   for (let i = 0, len = models.length; i < len; i++) {
    this.addRowElement(list, this._renderRow(models[i]).rowElement)
   }

  } else {

   for (let i = 0, len = models.length; i < len; i++) {
    const { id, rowElement } = this._renderRow(models[i])
    if (id === this._identityFunction(this.value)) {
     rowElement.classList.add(selected_class)
    }
    this.addRowElement(list, rowElement)
   }

  }

 }

 /**
  * @private
  * @param {import("../html/ListModel.js").ListModel<IdType, any>} model
  */
 _renderRow(model) {
  const id = this._identityFunction(model)
  const rowElement = span({
   dataset: { value: id },
   style: { cursor: "pointer" },
   innerHTML: noScript(stringOrEmpty(model.r)),
   onclick: () => this._selected(id, model, rowElement)
  })
  return { id, rowElement }
 }

 /**
  * @private
  * @param {string} id
  * @param {import("../html/ListModel.js").ListModel<IdType, any>} model
  * @param {HTMLSpanElement} span
  */
 _selected(id, model, span) {
  try {
   if (id !== this._identityFunction(this.value)) {
    this.value = model
    this._removeSelectedClass()
    span.classList.add(selected_class)
    this.modified = true
   }
   this.close()
  } catch (error) {
   errorDisplay(error)
  }
 }

}