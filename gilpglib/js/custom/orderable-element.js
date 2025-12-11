import { clone_class } from "../const/clone_class.js"
import { drag_class } from "../const/drag_class.js"
import { gilpgrearrange_event } from "../const/gilpgrearrange_event.js"
import { order_attribute } from "../const/order_attribute.js"
import { over_class } from "../const/over_class.js"
import { row_class } from "../const/row_class.js"
import { customEventNew } from "../di/html/customEventNew.js"
import { numberAttributeNew } from "../di/html/numberAttributeNew.js"
import { html } from "../html/html.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import { _ } from "../lite/_.js"
import { Signal } from "../Signal/Signal.js"
import { orderable_list_tag, OrderableListElement } from "./orderable-list.js"

export const orderable_element_tag = "orderable-element"

/**
 * @typedef {Object} OrderableElementOnly
 * @property {number | Signal<number>} [order] 
 * @property {(this: OrderableElement,
 *   event: CustomEvent<import("./OrderableEvent.js").OrderableEvent>) => any
 *                                                         } [ongilpgrearrange] 
 */
/**
 * @typedef {import("../lite/parameter/LiteElementProperties.js").
 *   LiteElementProperties<OrderableElement> & OrderableElementOnly
 *                                                 } OrderableElementProperties
 */
/**
 * @param {import("../lite/parameter/LiteElementParameter.js").
 *                             LiteElementParameter<OrderableElement,
 *                                      OrderableElementProperties>[]} contents
 */
export function Orderable(...contents) {
 return _(new OrderableElement(), ...contents)
}

export class OrderableElement extends HTMLElement {

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof OrderableElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(orderable_element_tag))
  }
 }

 /**
  * @private
  */
 _getStyle() {
  return html`
   <style>
    
    :host {
     display: flex;
     box-sizing: border-box;
     align-items: flex-start;
     gap: var(--gap, 0.5rem);
     padding-top: 1em;
     padding-bottom: 1em;
     border-top: transparent solid thick;
    }

    :host(.${clone_class}) {
     cursor: move;
     position: absolute;
     background-color: var(--cloneColor);
     border: 1px solid;
    }

    :host(.${drag_class}) {
     background-color: var(--dragColor);
    }

    :host(.${over_class}) {
     border-top: var(--overColor, greenyellow) solid var(--overHeight, 3rem);
    }

    ::slotted(.${row_class}) {
     display: flex;
     flex: 1 1;
     align-items: flex-start;
     overflow: hidden;
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
  this._order = numberAttributeNew(this, order_attribute)
 }

 get order() {
  return this._order.get()
 }

 set order(order) {
  this._order.set(order)
 }

 get list() {
  if (!this._list) {
   /**
    * @private
    * @type {OrderableListElement | null}
    */
   this._list = this.closest(orderable_list_tag)
  }
  return this._list
 }

 dragStart() {
  this.classList.add(drag_class)
 }

 dragEnter() {
  this.classList.add(over_class)
 }

 dragLeave() {
  this.classList.remove(over_class)
 }

 drop() {
  this.classList.remove(drag_class)
  const list = this.list
  if (list && list.drag) {
   /**
    * @type {import("./OrderableEvent.js").OrderableEvent}
    */
   const detail = {
    source: list.drag.order,
    target: this.order
   }
   this.dispatchEvent(customEventNew(gilpgrearrange_event, detail))
  }
 }

}

customElements.define(orderable_element_tag, OrderableElement)