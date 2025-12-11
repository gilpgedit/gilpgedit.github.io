import { clone_class } from "../const/clone_class.js"
import { scrollBottomLimit } from "../di/scrollBottomLimit.js"
import { scrollIncrement } from "../di/scrollIncrement.js"
import { scrollTopLimit } from "../di/scrollTopLimit.js"
import { html } from "../html/html.js"
import { DragHandleIcon } from "../i18n/lite/DragHandleIcon.js"
import { _ } from "../lite/_.js"
import { orderable_element_tag, OrderableElement } from "./orderable-element.js"
import { OrderableListEndElement } from "./orderable-list-end.js"
import { orderable_list_tag, OrderableListElement } from "./orderable-list.js"

export const drag_handler_tag = "drag-handler"

/**
 * @param {import("../lite/parameter/LiteNoContentElementParameter.js").
 *                        LiteNoContentElementParameter<DragHandleElement,
 *                    import("../lite/parameter/LiteElementProperties.js").
 *                        LiteElementProperties<DragHandleElement>>[]} contents
 */
export function DragHandle(...contents) {
 return _(new DragHandleElement(), ...contents)
}

/**
 * @typedef {Object} DragStart
 * @property {number} y movement initial y position.
 * @property {number} cloneTop clone top.
 */

export class DragHandleElement extends HTMLElement {


 /**
  * @private
  */
 _getStyle() {
  return html`
   <style>

    :host {
     display: block;
     box-sizing: border-box;
     align-self: flex-start;
     flex: 0 0;
     cursor: move;
     /* Avoid interference with drag & drop */
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
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
  this._mouseMove = this._mouseMove.bind(this)
  this._touchMove = this._touchMove.bind(this)
  this._mouseDown = this._mouseDown.bind(this)
  this._startTouch = this._startTouch.bind(this)
 }

 connectedCallback() {
  if (this.childElementCount === 0) {
   this.append(DragHandleIcon())
  }
  this.addEventListener("mousedown", this._mouseDown)
  this.addEventListener("touchstart", this._startTouch)
 }

 disconnectedCallback() {
  this.removeEventListener("mousedown", this._mouseDown)
  this.removeEventListener("touchstart", this._startTouch)
 }

 get orderable() {
  if (!this._orderable) {
   /**
    * @type {OrderableElement | null}
    */
   this._orderable = this.closest(orderable_element_tag)
  }
  return this._orderable
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

 get dropElement() {
  return this._dropElement
 }

 /**
  * @param {OrderableElement | OrderableListEndElement | undefined} element 
  */
 set dropElement(element) {
  if (this._dropElement) {
   this._dropElement.dragLeave()
  }
  this._dropElement = element
  if (element) {
   element.dragEnter()
  }
 }

 /**
  * @private
  * @param {MouseEvent} evt
  */
 _mouseDown(evt) {
  const list = this.list
  if (list && !list.drag) {
   this._mouseStart = this._dragStart(evt.y)
   document.addEventListener("mousemove", this._mouseMove)
   document
    .addEventListener("mouseup", this._mouseUp.bind(this), { once: true })
  }
 }

 /**
  * @private
  * @param {MouseEvent} evt
  */
 _mouseMove(evt) {
  if (this._mouseStart) {
   this._dragMove(evt.x, evt.y, this._mouseStart)
  }
 }

 /**
  * @private
  */
 _mouseUp() {
  this._mouseStart = null
  this._dragEnd()
  document.removeEventListener("mousemove", this._mouseMove)
 }

 /**
  * @private
  * @param {TouchEvent} evt
  * @returns {boolean}
  */
 _startTouch(evt) {
  evt.preventDefault()
  const list = this.list
  if (list && !list.drag) {
   this._touchStart = this._dragStart(evt.touches[0].clientY)
   document.addEventListener("touchmove", this._touchMove, { passive: false })
   document
    .addEventListener("touchend", this._touchEnd.bind(this), { once: true })
  }
  return false
 }

 /**
  * @private
  * @param {TouchEvent} evt
  * @returns {boolean}
  */
 _touchMove(evt) {
  evt.preventDefault()
  if (this._touchStart) {
   this
    ._dragMove(evt.touches[0].clientX, evt.touches[0].clientY, this._touchStart)
  }
  return false
 }

 /**
  * @private
  */
 _touchEnd() {
  this._touchStart = null
  this._dragEnd()
  document.removeEventListener("touchmove", this._touchMove)
 }

 /**
  * @private
  * @param {number} y
  */
 _dragStart(y) {
  const orderable = this.orderable
  const list = this.list
  if (orderable && list) {
   list.drag = orderable
   const cloneTop = orderable.offsetTop
   const cloneHeigh = orderable.clientHeight
   const node = orderable.cloneNode(true)
   if (node instanceof HTMLElement) {
    orderable.dragStart()
    this._clone = node
    list.appendChild(this._clone)
    this._clone.classList.add(clone_class)
    this._clone.style.top = `${cloneTop}px`
    this._clone.style.height = `${cloneHeigh}px`
    this._clone.style.width = `${orderable.offsetWidth}px`
   }
   return ({ y, cloneTop })
  } else {
   return undefined
  }
 }

 /**
  * @private
  * @param {number} x
  * @param {number} y
  * @param {DragStart} start
  */
 _dragMove(x, y, start) {
  const dy = y - start.y
  const list = this.list
  if (this._clone && list && list.drag) {
   const elements = document.elementsFromPoint(x, y)
   const prior = this.dropElement
   for (const element of elements) {
    if (element instanceof OrderableElement && element !== prior
     && element != this._clone) {
     if (element !== list.drag && list.drag.order !== element.order - 1) {
      this.dropElement = element
     } else {
      this.dropElement = undefined
     }
     break
    }
    if (element instanceof OrderableListEndElement) {
     if (list.drag.order < list.childElementCount - 2) {
      this.dropElement = element
     } else {
      this.dropElement = undefined
     }
     break
    }
   }
   if (document.body.offsetHeight + this._clone.offsetHeight >= innerHeight) {
    let deltaTop = 0
    if (scrollY > 0 && y <= scrollTopLimit()) {
     deltaTop = -scrollIncrement()
    } else if (y >= innerHeight - scrollBottomLimit()) {
     deltaTop = scrollIncrement()
    }
    if (deltaTop) {
     start.cloneTop += deltaTop
     if (start.cloneTop < 0) {
      deltaTop = 0
      start.cloneTop = 0
     } else if (start.cloneTop > list.offsetHeight) {
      deltaTop = 0
      start.cloneTop = list.offsetHeight -
       (list.lastElementChild instanceof HTMLElement
        ? list.lastElementChild.offsetHeight
        : 0)
     }
     scrollBy(0, deltaTop)
     setTimeout(() => this._dragMove(x, y, start), 2000)
    }
   }
   let cloneTop = start.cloneTop + dy
   this._clone.style.top = `${cloneTop}px`
  }
 }

 /**
  * @private
  */
 _dragEnd() {
  const list = this.list
  const dropElement = this.dropElement
  if (this._clone && list) {
   if (dropElement) {
    dropElement.drop()
   }
   this._clone.remove()
   this._clone = undefined
   list.dragEnd()
  }
 }
}

customElements.define(drag_handler_tag, DragHandleElement)