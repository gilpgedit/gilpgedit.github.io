import { assertNotNullOrUndefined } from "../assertNotNullOrUndefined.js"
import { innerHTML_property } from "../const/innerHTML_property.js"
import { row_class } from "../const/row_class.js"
import { errorDisplay } from "../di/errorDisplay.js"
import { stateNew } from "../di/stateNew.js"
import { workEnd } from "../di/work/workEnd.js"
import { workStart } from "../di/work/workStart.js"
import { ListModel_foregroundColor } from "../html/ListModel.js"
import { noScript } from "../html/noScript.js"
import { recordCountTemplate } from "../i18n/template/recordCountTemplate.js"
import {
 formPropertUndefinedText
} from "../i18n/text/formPropertUndefinedText.js"
import {
 listPropertUndefinedText
} from "../i18n/text/listPropertUndefinedText.js"
import { li } from "../lite/li.js"
import { p } from "../lite/p.js"
import { RequestDiscardA } from "../lite/RequestDiscardA.js"
import { span } from "../lite/span.js"
import { stringOrEmpty } from "../stringOrEmpty.js"

/**
 * @template IdType
 * @template SortType
 */
export class PagingListMediator {

 /**
  * @param {import("../html/Paging.js").Paging<IdType, SortType>} paging
  * @param {import("../html/UrlExtractor.js").UrlExtractor<IdType>
  *                                                            } [urlExtractor]
  */
 constructor(paging, urlExtractor) {
  /**
   * @readonly
   */
  this.readMoreHidden = stateNew(true)
  /**
   * @readonly
   */
  this.recordCount = stateNew("")
  /**
   * @protected
   * @readonly
   */
  this.paging = paging
  /**
   * @protected
   * @readonly
   */
  this.urlExtractor = urlExtractor
  /**
   * @private
   */
  this._count = 0
  this.firstPageSubmit = this.firstPageSubmit.bind(this)
  this.firstPage = this.firstPage.bind(this)
  this.nextPage = this.nextPage.bind(this)
 }

 /**
  * @returns {HTMLFormElement | undefined}
  */
 get form() {
  return this._form
 }

 set form(form) {
  this._form = form
 }

 /**
  * @returns {HTMLUListElement | HTMLOListElement | undefined }
  */
 get list() {
  return this._list
 }

 set list(list) {
  this._list = list
 }

 /**
  * @param {SubmitEvent} event
  */
 async firstPageSubmit(event) {
  event.preventDefault()
  if (event.target instanceof HTMLFormElement) {
   this.form = event.target
  }
  await this.firstPage()
 }

 async firstPage() {
  const form = assertNotNullOrUndefined(this.form, formPropertUndefinedText())
  const list = assertNotNullOrUndefined(this.list, listPropertUndefinedText())
  try {
   await workStart()
   const models = await this.paging.doFilter(form)
   this._count = models.length
   this.displayCount(models)
   this._displayModels(list, models)
  } catch (error) {
   errorDisplay(error)
  } finally {
   await workEnd()
  }
 }

 async nextPage() {
  const form = assertNotNullOrUndefined(this.form, formPropertUndefinedText())
  const list = assertNotNullOrUndefined(this.list, listPropertUndefinedText())
  try {
   await workStart()
   const models = await this.paging.nextPage(form)
   this._count += models.length
   this.displayCount(models)
   this.displayMoreModels(list, models)
  } catch (error) {
   errorDisplay(error)
  } finally {
   await workEnd()
  }
 }

 /**
  * @private
  * @param {HTMLUListElement | HTMLOListElement} list
  * @param {import("../html/ListModel.js").ListModel<IdType, SortType>[]} models
  */
 _displayModels(list, models) {
  list.innerHTML = ""
  this.displayMoreModels(list, models)
 }

 /**
  * @protected
  * @param {import("../html/ListModel.js").ListModel<IdType, SortType>[]} models
  */
 displayCount(models) {
  const addTheOrMoreText = models.length >= this.paging.pageLength
  this.readMoreHidden.set(!addTheOrMoreText)
  this.recordCount.set(recordCountTemplate(this._count, addTheOrMoreText))
 }

 /**
  * @protected
  * @param {HTMLUListElement | HTMLOListElement} list
  * @param {import("../html/ListModel.js").ListModel<IdType, SortType>[]} models
  */
 displayMoreModels(list, models) {

  if (this.urlExtractor) {

   for (let i = 0, len = models.length; i < len; i++) {
    const model = models[i]
    this.addRowElement(list, RequestDiscardA({
     href: this.urlExtractor(model.i),
     [innerHTML_property]: noScript(stringOrEmpty(model.r))
    },
     function () {
      const foregroundColor = model[ListModel_foregroundColor]
      if (foregroundColor) {
       this.style.textDecoration = `underline ${foregroundColor}`
      }
     }
    ))
   }

  } else {

   for (let i = 0, len = models.length; i < len; i++) {
    this.addRowElement(
     list,
     span({ [innerHTML_property]: noScript(stringOrEmpty(models[i].r)) }))
   }

  }

 }

 /**
  * @protected
  * @template {Element} ChildType
  * @param {HTMLUListElement | HTMLOListElement} list
  * @param {ChildType} rowElement
  */
 addRowElement(list, rowElement) {
  rowElement.classList.add(row_class)
  list.append(li(p(rowElement)))
  return rowElement
 }

}