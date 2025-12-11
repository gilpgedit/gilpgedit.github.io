import { assertNotNullOrUndefined } from "../assertNotNullOrUndefined.js"
import { gilpgrearrange_event } from "../const/gilpgrearrange_event.js"
import { order_slot } from "../const/order_slot.js"
import { row_class } from "../const/row_class.js"
import { DragHandle } from "../custom/drag-handle.js"
import {
 Orderable, orderable_element_tag
} from "../custom/orderable-element.js"
import {
 orderable_list_end_tag, OrderableListEnd
} from "../custom/orderable-list-end.js"
import { OrderableListElement } from "../custom/orderable-list.js"
import { OrderedRender } from "../custom/ordered-render.js"
import { errorDisplay } from "../di/errorDisplay.js"
import { stateNew } from "../di/stateNew.js"
import { workEnd } from "../di/work/workEnd.js"
import { workStart } from "../di/work/workStart.js"
import { html } from "../html/html.js"
import { noScript } from "../html/noScript.js"
import { recordCountTemplate } from "../i18n/template/recordCountTemplate.js"
import { listEndText } from "../i18n/text/listEndText.js"
import { listPropertUndefinedText } from "../i18n/text/listPropertUndefinedText.js"
import { RequestDiscardA } from "../lite/RequestDiscardA.js"
import { span } from "../lite/span.js"
import { stringOrEmpty } from "../stringOrEmpty.js"

/**
 * @template IdType
 */
export class OrderableListMediator {
 /**
  * @param {import("./OrderableListMediatorConfig.js").
  *                         OrderableListMediatorConfig<IdType, number>} config
  */
 constructor(config) {
  /**
   * @private
   * @readonly
   */
  this._config = config
  /**
   * @readonly
   */
  this.recordCount = stateNew("")
  this.queryAllSubmit = this.queryAllSubmit.bind(this)
  this.rearrange = this.rearrange.bind(this)
 }

 /**
  * @returns {OrderableListElement | undefined }
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
 async queryAllSubmit(event) {
  event.preventDefault()
  this.queryAll()
 }

 async queryAll() {
  try {
   await workStart()
   /**
    * @private
    * @type {import("../html/ListModel.js").ListModel<IdType, number>[]}
    */
   this._models = await this._config.queryAllFunction()
   this._displayCount()
   this._displayModels()
  } catch (e) {
   errorDisplay(e)
  } finally {
   await workEnd()
  }
 }

 _displayModels() {
  const models = this._models

  if (models) {

   const list = assertNotNullOrUndefined(this.list, listPropertUndefinedText())

   const elements =
    list.querySelectorAll(`${orderable_element_tag},${orderable_list_end_tag}`)

   for (let i = 0, len = elements.length; i < len; i++) {
    elements.item(i).removeEventListener(gilpgrearrange_event, this.rearrange)
   }

   list.innerHTML = ""

   if (this._config.urlExtractor) {

    const extrector = this._config.urlExtractor
    for (let i = 0, len = models.length; i < len; i++) {
     const m = models[i]
     list.append(Orderable({
      order: m.s,
      ongilpgrearrange: this.rearrange
     },
      DragHandle(),
      RequestDiscardA({
       className: { [row_class]: true },
       href: extrector(m.i),
      },
       OrderedRender({
        innerHTML: html`<span slot="${order_slot}">${m.s}</span>`.innerHTML
         + noScript(stringOrEmpty(m.r))
       })
      )
     ))
    }

   } else {

    for (let i = 0, len = models.length; i < len; i++) {
     const m = models[i]
     list.append(Orderable({
      order: m.s,
      ongilpgrearrange: this.rearrange
     },
      DragHandle(),
      OrderedRender({
       className: { [row_class]: true },
       innerHTML: html`<span slot="${order_slot}">${m.s}</span>`.innerHTML
        + noScript(stringOrEmpty(m.r))
      })
     ))
    }

   }

   if (models.length > 0) {
    list.append(OrderableListEnd({
     ongilpgrearrange: this.rearrange
    },
     span(this._config.listEndText || listEndText())
    ))
   }

  }

 }

 _displayCount() {
  const models = this._models
  if (models) {
   this.recordCount.set(recordCountTemplate(models.length, false))
  }
 }

 /**
  * @param {CustomEvent<import("../custom/OrderableEvent.js").OrderableEvent>
  *                                                                     } event
  */
 async rearrange(event) {
  try {
   const detail = event.detail
   await workStart()
   const models = this._models
   if (models) {
    const copy = models.map(m => ({ ...m }))
    this._models =
     await this._config.rearrangeFunction(detail.source, detail.target, copy)
    this._displayCount()
    this._displayModels()
   }
  } catch (e) {
   errorDisplay(e)
  } finally {
   await workEnd()
  }
 }

}