import { arrayOrEmpty } from "../arrayOrEmpty.js"
import { assertNotNullOrUndefined } from "../assertNotNullOrUndefined.js"
import { innerHTML_property } from "../const/innerHTML_property.js"
import { selected_class } from "../const/selected_class.js"
import { style_property } from "../const/style_property.js"
import { errorDisplay } from "../di/errorDisplay.js"
import { setNew } from "../di/setNew.js"
import { noScript } from "../html/noScript.js"
import {
 listPropertUndefinedText
} from "../i18n/text/listPropertUndefinedText.js"
import { input } from "../lite/input.js"
import { label } from "../lite/label.js"
import { span } from "../lite/span.js"
import { stringOrEmpty } from "../stringOrEmpty.js"
import { PagingDialogMediator } from "./PagingDialogMediator.js"

/**
 * @template IdType
 * @template SortType
 * @extends {PagingDialogMediator<IdType, SortType,
 *           import("../html/ListModel.js").ListModel<IdType, SortType>[]>}
 */
export class SelectManyDialogMediator extends PagingDialogMediator {
 /**
  * @param {import("../html/Paging.js").Paging<IdType, SortType>} paging
  * @param {import("../IdentityFunction.js").
  *                   IdentityFunction<string, import("../html/ListModel.js").
  *                              ListModel<IdType, SortType>>} identityFunction
  */
 constructor(paging, identityFunction) {
  super([], paging)
  /**
   * @private
   * @readonly
   */
  this._identityFunction = identityFunction
  this.unselectAll = this.unselectAll.bind(this)
 }

 /**
  * @override
  */
 unselectAll() {
  try {
   this.value = []
   this.modified = true
   const list = assertNotNullOrUndefined(this.list, listPropertUndefinedText())
   /**
    * @type {NodeListOf<HTMLInputElement>}
    */
   const checks = list.querySelectorAll(":checked")
   for (let i = 0, len = checks.length; i < len; i++) {
    this._unselect(checks.item(i))
   }
  } catch (error) {
   errorDisplay(error)
  }
 }

 /**
  * @private
  * @param {HTMLInputElement} check
  */
 _unselect(check) {
  check.checked = false
  const label = check.closest("label")
  if (label) {
   label.classList.remove(selected_class)
  }
 }

 /**
  * @private
  * @param {HTMLInputElement} check
  */
 _select(check) {
  check.checked = true
  const label = check.closest("label")
  if (label) {
   label.classList.add(selected_class)
  }
 }

 /**
  * @override
  */
 updateSelection() {
  const list = assertNotNullOrUndefined(this.list, listPropertUndefinedText())
  const checks = list.querySelectorAll("input")
  if (checks.length === 0) {
   for (let i = 0, len = checks.length; i < len; i++) {
    this._unselect(checks[i])
   }
  } else {
   const ids = this._getValueIds()
   for (let i = 0, len = checks.length; i < len; i++) {
    const check = checks[i]
    if (ids.has(check.value)) {
     this._select(check)
    } else {
     this._unselect(check)
    }
   }
  }
 }

 /**
  * @private 
  */
 _getValueIds() {
  const value = this.value
  return setNew(value ? value.map(this._identityFunction) : [])
 }

 /**
  * @override
  * @param {HTMLUListElement | HTMLOListElement} list
  * @param {import("../html/ListModel.js").ListModel<IdType, SortType>[]} models
  */
 displayMoreModels(list, models) {
  list.style.listStyleType = "none"
  list.style.padding = "0"
  if (this.value && this.value.length) {

   const ids = this._getValueIds()
   for (let i = 0, len = models.length; i < len; i++) {
    const { id, inputElement, rowElement } = this._renderRow(models[i])
    if (ids.has(id)) {
     this._select(inputElement)
    }
    this.addRowElement(list, rowElement)
   }

  } else {

   for (let i = 0, len = models.length; i < len; i++) {
    this.addRowElement(list, this._renderRow(models[i]).rowElement)
   }

  }

 }

 /**
  * @private
  * @param {import("../html/ListModel.js").ListModel<IdType, SortType>} model
  */
 _renderRow(model) {
  const id = this._identityFunction(model)
  const inputElement = input({
   type: "checkbox",
   value: id,
   onchange: () => this._change(id, model, inputElement)
  })
  const rowElement = label({
   [style_property]: {
    display: "flex",
    gap: "var(--groupGap)"
   }
  },
   inputElement,
   span({ [innerHTML_property]: noScript(stringOrEmpty(model.r)) })
  )
  return { id, inputElement, rowElement }
 }

 /**
  * @private
  * @param {string} id
  * @param {import("../html/ListModel.js").ListModel<IdType, SortType>} model
  * @param {HTMLInputElement} input
  */
 _change(id, model, input) {
  try {
   if (input.checked) {
    const ids = this._getValueIds()
    if (!ids.has(id)) {
     const newValue = this.value ? this.value.slice() : []
     newValue.push(model)
     this.value = newValue
    }
    this._select(input)
   } else {
    this.value = arrayOrEmpty(this.value)
     .filter(model => id !== this._identityFunction(model))
    this._unselect(input)
   }
   this.modified = true
  } catch (error) {
   errorDisplay(error)
  }
 }

}