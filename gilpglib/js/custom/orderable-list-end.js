import { gilpgrearrange_event } from "../const/gilpgrearrange_event.js"
import { over_class } from "../const/over_class.js"
import { customEventNew } from "../di/html/customEventNew.js"
import { html } from "../html/html.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import { _ } from "../lite/_.js"
import { orderable_list_tag, OrderableListElement } from "./orderable-list.js"

export const orderable_list_end_tag = "orderable-list-end"

/**
 * @typedef {Object} OrderableListEndElementOnly
 * @property {(this: OrderableListEndElement,
 *   event: CustomEvent<import("./OrderableEvent.js").OrderableEvent>) => any
 *                                                         } [ongilpgrearrange] 
 */
/**
 * @typedef {import("../lite/parameter/LiteElementProperties.js").
 *                         LiteElementProperties<OrderableListEndElement> &
 *                                               OrderableListEndElementOnly
 *                                          } OrderableListEndElementProperties
 */
/**
 * @param {import("../lite/parameter/LiteElementParameter.js").
 *                           LiteElementParameter<OrderableListEndElement,
 *                              OrderableListEndElementProperties>[]} contents
 */
export function OrderableListEnd(...contents) {
 return _(new OrderableListEndElement(), ...contents)
}

export class OrderableListEndElement extends HTMLElement {

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof OrderableListEndElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(orderable_list_end_tag))
  }
 }

 /**
  * @private
  */
 _getStyle() {
  return html`
   <style>
    
    :host {
     display: block;
     text-align: center;
     padding: 1em;
    }

    :host([hidden]) {
     display: none;
    }

    :host(.${over_class}) {
     border-top: var(--overColor, greenyellow) solid var(--overHeight, 3rem);
    }

   </style>
  `
 }

 /**
  * @private
  */
 _getContent() {
  return html`${this._getStyle()}<slot></slot>`
 }

 constructor() {
  super()
  const shadow = this.attachShadow({ mode: "open" })
  shadow.innerHTML = this._getContent().innerHTML
 }

 get list() {
  if (!this._list) {
   /**
    * @type {OrderableListElement | null}
    */
   this._list = this.closest(orderable_list_tag)
  }
  return this._list
 }

 dragEnter() {
  this.classList.add(over_class)
 }

 dragLeave() {
  this.classList.remove(over_class)
 }

 drop() {
  const lista = this.list
  if (lista && lista.drag) {
   /** @type {import("./OrderableEvent.js").OrderableEvent} */
   const detail = { source: lista.drag.order, target: -1 }
   this.dispatchEvent(customEventNew(gilpgrearrange_event, detail))
  }
 }
}

customElements.define(orderable_list_end_tag, OrderableListEndElement)