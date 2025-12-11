import { count_suffix } from "../../../src/js/const/count_suffix.js"
import { name_attribute } from "../const/name_attribute.js"
import { ordered_attribute } from "../const/ordered_attribute.js"
import { value_attribute } from "../const/value_attribute.js"
import { stringAttributeNew } from "../di/html/stringAttributeNew.js"
import { html } from "../html/html.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import {
 contentPropertyUndefinedText
} from "../i18n/text/contentPropertyUndefinedText.js"
import { _ } from "../lite/_.js"
import { input } from "../lite/input.js"
import { li } from "../lite/li.js"
import { ol } from "../lite/ol.js"

export const ordered_multi_element_tag = "ordered-multi-element"
const ORDERED_MULTI_ITEM_CLASS = "ordered-multi-eleent-iten"

/**
 * @template {HTMLElement} ElementType
 * @template ValueType
 * @typedef {Object} OrderedMultiElementOnly
 * @property {(() => ElementType) | undefined} [content]
 * @property {string} [name]
 * @property {ValueType[]} [value]
 */
/**
 * @template {HTMLElement} ElementType
 * @template ValueType
 * @typedef {import("../lite/parameter/LiteElementProperties.js").
 *                         LiteElementProperties<OrderedMultiElement> &
 *                           OrderedMultiElementOnly<ElementType, ValueType>
 *                                              } OrderedMultiElementProperties
 */
/**
 * @template {HTMLElement} ElementType
 * @template ValueType
 * @param {import("../lite/parameter/LiteElementParameter.js").
 *       LiteElementParameter<OrderedMultiElement<ElementType, ValueType>,
 *           OrderedMultiElementProperties<ElementType, ValueType>>[]} contents
 */
export function OrderedMulti(...contents) {
 /**
  * @type {OrderedMultiElement<ElementType, ValueType>}
  */
 const element = new OrderedMultiElement()
 return _(element, ...contents)
}

/**
 * @template {HTMLElement} ElementType
 * @template ValueType
 */
export class OrderedMultiElement extends HTMLElement {

 static get observedAttributes() {
  return [ordered_attribute]
 }

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof OrderedMultiElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(ordered_multi_element_tag))
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

  /**
   * @readonly
   * @private
   */
  this._count = input({ type: "hidden" })
  /**
   * @readonly
   * @private
   */
  this._list = ol()
  /**
   * @readonly
   * @private
   */
  this._name = stringAttributeNew(this, name_attribute)

 }

 connectedCallback() {

  if (!this._loaded) {

   this.append(
    this._count,
    this._list
   )

   this._loaded = true

  }

 }

 get content() {
  return this._content
 }

 /**
  * @param {(() => ElementType) | undefined} content
  */
 set content(content) {
  this._content = content
 }

 get name() {
  return this._name.get()
 }

 /**
  * @param {string} name 
  */
 set name(name) {
  this._name.set(name)
  this._count.name = name + count_suffix
  const elements = this._list.querySelectorAll(ORDERED_MULTI_ITEM_CLASS)
  for (let i = 0, len = elements.length; i < len; i++) {
   const element = elements[i]
   if (name_attribute in element) {
    element[name_attribute] = name + i
   }
  }
 }

 /**
  * @returns {ValueType[]}
  */
 get value() {
  const elements = this._list.querySelectorAll(ORDERED_MULTI_ITEM_CLASS)
  const value = []
  for (let i = 0, len = elements.length; i < len; i++) {
   value.push(elements[i][value_attribute])
  }
  return value
 }

 set value(value) {
  this._list.innerHTML = ""
  const name = this.name
  const len = value.length
  for (let i = 0; i < len; i++) {
   const element = this._add()
   if (element) {
    if (value_attribute in element) {
     element[value_attribute] = value[i]
    }
    if (name_attribute in element) {
     element[name_attribute] = name + i
    }
   }
  }
  this._count.value = len.toString()
 }

 /**
  * @private
  */
 _add() {
  const content = this.content
  if (typeof content !== "function")
   throw new Error(contentPropertyUndefinedText())

  const list = this._list
  const element = content()
  element.classList.add(ORDERED_MULTI_ITEM_CLASS)
  list.append(li(element))
  this._count.value = list.childElementCount.toString()
  return element
 }

}

customElements.define(ordered_multi_element_tag, OrderedMultiElement)