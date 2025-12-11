import { drag_class } from "../const/drag_class.js"
import { over_class } from "../const/over_class.js"
import { html } from "../html/html.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import { _ } from "../lite/_.js"
import { OrderableElement } from "./orderable-element.js"

export const orderable_list_tag = "orderable-list"

/**
 * @param {import("../lite/parameter/LiteElementParameter.js").
 *                           LiteElementParameter<OrderableListElement,
 *                     import("../lite/parameter/LiteElementProperties.js").
 *                     LiteElementProperties<OrderableListElement>>[]} contents
 */
export function OrderableList(...contents) {
 return _(new OrderableListElement(), ...contents)
}

export class OrderableListElement extends HTMLElement {

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof OrderableListElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(orderable_list_tag))
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
     position: relative;
    }

    :host([hidden]) {
     display: none;
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
  /** @type {OrderableElement | null} */
  this.drag = null
 }

 dragEnd() {
  this.drag = null
  const children = this.children
  for (let i = 0, length = children.length; i < length; i++) {
   const element = children[i]
   if (element instanceof HTMLElement) {
    element.classList.remove(over_class, drag_class)
   }
  }
 }

}

customElements.define(orderable_list_tag, OrderableListElement)