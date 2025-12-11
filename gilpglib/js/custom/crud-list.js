import { count_suffix } from "../../../src/js/const/count_suffix.js"
import { name_attribute } from "../const/name_attribute.js"
import { name_property } from "../const/name_property.js"
import { value_attribute } from "../const/value_attribute.js"
import { stringAttributeNew } from "../di/html/stringAttributeNew.js"
import { classSelector } from "../html/classSelector.js"
import { dispatchInputEvent } from "../html/dispatchInputEvent.js"
import { html } from "../html/html.js"
import { AddIcon } from "../i18n/lite/AddIcon.js"
import { DeleteIcon } from "../i18n/lite/DeleteIcon.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import {
 contentPropertyUndefinedText
} from "../i18n/text/contentPropertyUndefinedText.js"
import { listEndText } from "../i18n/text/listEndText.js"
import { _ } from "../lite/_.js"
import { BasicToolbar } from "../lite/BasicToolbar.js"
import { button } from "../lite/button.js"
import { input } from "../lite/input.js"
import { Signal } from "../Signal/Signal.js"
import { DragHandle } from "./drag-handle.js"
import { Orderable, OrderableElement } from "./orderable-element.js"
import {
 OrderableListEnd
} from "./orderable-list-end.js"
import { OrderableList } from "./orderable-list.js"

export const crud_list_tag = "crud-list"
const CRUD_LIST_ITEM_CLASS = "crud-list-iten"

/**
 * @template {HTMLElement} ElementType
 * @template ValueType
 * @typedef {Object} CrudListElementOnly
 * @property {() => ElementType} [content]
 * @property {string | Signal<string>} [name]
 * @property {ValueType[]} [value] 
 */
/**
 * @template {HTMLElement} ElementType
 * @template ValueType
 * @typedef {import("../lite/parameter/LiteElementProperties.js").
 *                         LiteElementProperties<CrudListElement> &
 *                               CrudListElementOnly<ElementType, ValueType>
 *                                                  } CrudListElementProperties
 */
/**
 * @template {HTMLElement} ElementType
 * @template ValueType
 * @param {import("../lite/parameter/LiteElementParameter.js").
 *           LiteElementParameter<CrudListElement<ElementType, ValueType>,
 *               CrudListElementProperties<ElementType, ValueType>>[]} contents
 */
export function CrudList(...contents) {
 return _(new CrudListElement(), ...contents)
}

/**
 * @template {HTMLElement} ElementType
 * @template ValueType
 */
export class CrudListElement extends HTMLElement {

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof CrudListElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(crud_list_tag))
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
     box-sizing: border-box;
     max-width: 100%
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

  this._rearrange = this._rearrange.bind(this)
  this._addEvent = this._addEvent.bind(this)

  /**
   * @readonly
   * @private
   */
  this._count = input({ type: "hidden", value: "0" })
  /**
   * @readonly
   * @private
   */
  this._last = OrderableListEnd({ ongilpgrearrange: this._rearrange },
   listEndText())
  /**
   * @readonly
   * @private
   */
  this._list = OrderableList(this._last)

  /**
   * @readonly
   * @private
   */
  this._name = stringAttributeNew(this, name_attribute)

 }

 connectedCallback() {

  if (!this._loaded) {

   this.append(
    BasicToolbar({ style: { position: "sticky", top: "0", zIndex: "1" } },
     button({
      style: { marginLeft: "auto" },
      type: "button",
      onclick: this._addEvent
     },
      AddIcon()
     )
    ),
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
  this._renameAll()
 }

 /**
 * @private
 */
 _renameAll() {

  const name = this.name

  const elements =
   this._list.querySelectorAll(classSelector(CRUD_LIST_ITEM_CLASS))

  if (name) {

   for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements[i]
    if (name_attribute in element) {
     element[name_attribute] = name + i
    }
   }

  } else {

   for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements[i]
    if (name_attribute in element) {
     element[name_attribute] = ""
    }
   }

  }

 }

 /**
  * @returns {ValueType[]}
  */
 get value() {
  const elements =
   this._list.querySelectorAll(classSelector(CRUD_LIST_ITEM_CLASS))
  const value = []
  for (let i = 0, len = elements.length; i < len; i++) {
   value.push(elements[i][value_attribute])
  }
  return value
 }

 set value(value) {

  const list = this._list

  while (list.firstElementChild instanceof OrderableElement) {
   list.firstElementChild.remove()
  }

  const len = value.length
  const name = this.name

  for (let i = 0; i < len; i++) {
   const element = this._add()
   if (value_attribute in element) {
    element[value_attribute] = value[i]
   }
   if (name_property in element) {
    element[name_property] = name + i
   }
  }

  this._count.value = len.toString()

 }

 /**
  * @private
  */
 _addEvent() {
  const element = this._add()
  dispatchInputEvent(this)
  element.focus()
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
  element.classList.add(CRUD_LIST_ITEM_CLASS)
  const order = list.childElementCount

  const orderable = Orderable({
   order,
   ongilpgrearrange: this._rearrange
  },
   DragHandle(),
   element,
   button({
    type: "button",
    onclick: () => this._deleteOrderable(orderable)
   },
    DeleteIcon()
   )
  )

  list.insertBefore(orderable, this._last)

  this._count.value = order.toString()

  const name = this.name
  if (name && name_property in element) {
   element[name_property] = name + (order - 1)
  }

  return element

 }

 /**
  * @private
  * @param {OrderableElement} orderable
  */
 _deleteOrderable(orderable) {
  orderable.remove()
  this._renumber()
  this._renameAll()
  this._count.value = (this._list.childElementCount - 1).toString()
  dispatchInputEvent(this)
 }

 /**
  * @private
  * @param {CustomEvent<import("./OrderableEvent.js").OrderableEvent>} evt
  */
 _rearrange(evt) {
  const detail = evt.detail
  if (this._modelsMove(detail.source, detail.target)) {
   this._renumber()
   this._renameAll()
   dispatchInputEvent(this)
  }
 }

 /**
  * @private
  * @param {number} source
  * @param {number} target
  */
 _modelsMove(source, target) {

  if (source === target) {
   return false
  }

  const list = this._list
  const children = list.children
  const childrenLength = children.length

  if (target < 0) {

   // At the end.
   if (source >= childrenLength) {
    return false
   }

   source--
   const deleted = children[source]
   deleted.remove()
   list.insertBefore(deleted, this._last)

  } else if (source < target) {

   if (source == target - 1) {
    return false
   }

   source--
   target -= 2
   const deleted = children[source]
   deleted.remove()
   const targetNode = children[target]
   list.insertBefore(deleted, targetNode)

  } else {

   source--
   target--
   const deleted = children[source]
   deleted.remove()
   const targetNode = children[target]
   list.insertBefore(deleted, targetNode)

  }

  return true

 }

 /**
  * @private
  */
 _renumber() {
  for (let i = 0, children = this._list.children, len = children.length
   ; i < len; i++) {
   const element = children[i]
   if (element instanceof OrderableElement)
    element.order = i + 1
  }
 }

}

customElements.define(crud_list_tag, CrudListElement)