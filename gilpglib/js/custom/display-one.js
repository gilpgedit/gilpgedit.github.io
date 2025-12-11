import { assertNotNullOrUndefined } from "../assertNotNullOrUndefined.js"
import { name_attribute } from "../const/name_attribute.js"
import { value_attribute } from "../const/value_attribute.js"
import { errorDisplay } from "../di/errorDisplay.js"
import { stringAttributeNew } from "../di/html/stringAttributeNew.js"
import { html } from "../html/html.js"
import {
 getListModelFunctionMissingText
} from "../i18n/text/getListModelFunctionMissingText.js"
import { noSelectionText } from "../i18n/text/noSelectionText.js"
import { _ } from "../lite/_.js"
import { Signal } from "../Signal/Signal.js"
import { oneSelectionRenderer } from "./oneSelectionRenderer.js"

export const display_one_tag = "display-one"

/**
 * @typedef {Object} DisplayOneElementOnly
 * @property {string | Signal<string>} [name]
 * @property {string | Signal<string>} [value]
 * @property {(value: string) =>
 *   Promise<import('../html/ListModel.js').ListModel<any, any> | undefined> |
 *     Signal<(value: string) =>
 *    Promise<import('../html/ListModel.js').ListModel<any, any> | undefined>>
 *                                                      }  getListModelFunction
 */
/**
  * @typedef {import("../lite/parameter/LiteElementProperties.js").
  *   LiteElementProperties<DisplayOneElement> & DisplayOneElementOnly
  *                                               } DisplayOneElementProperties
  */
/**
  * @param {import("../lite/parameter/LiteNoContentElementParameter.js").
  *                        LiteNoContentElementParameter<DisplayOneElement,
  *                                    DisplayOneElementProperties>[]} contents
  */
export function DisplayOne(...contents) {
 return _(new DisplayOneElement(), ...contents)
}

export class DisplayOneElement extends HTMLElement {

 static get observedAttributes() {
  return [value_attribute]
 }

 /**
  * @private
  */
 _getStyle() {
  return html`
   <style>

    :host {
     display: block;
     border: 1.5px solid;
     border-radius: var(--radius, 0.4em);
    }

    :host([hidden]) {
     display: none;
    }

    ::slotted(.empty) {
     font-style: oblique;
     font-size: smaller;
    }

    ::slotted(.empty),
    ::slotted(.row) {
     display: block;
     margin-top: 0.5em;
     margin-bottom: 0.5em;
     padding-left: var(--gap, 0.5rem);
     padding-right: var(--gap, 0.5rem);
    }

    ::slotted(*) {
     display: block;
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
   * @private
   * @readonly
   */
  this._name = stringAttributeNew(this, name_attribute)
  /**
   * @private
   * @readonly
   */
  this._value = stringAttributeNew(this, value_attribute)
  /**
   * @private
   * @type {import("../html/ListModel.js").ListModel<any, any> | undefined}
   */
  this._internalValue = undefined
 }

 connectedCallback() {
  this._valueDisplay()
 }

 /**
  * @param {string} attributeName
  */
 attributeChangedCallback(attributeName) {
  switch (attributeName) {
   case value_attribute:
    this._valueDisplay()
    break
  }
 }

 get name() {
  return this._name.get()
 }

 set name(name) {
  this._name.set(name)
 }

 get value() {
  return this._value.get()
 }

 set value(value) {
  this._value.set(value)
 }

 /**
  * @private
  */
 async _valueDisplay() {
  try {
   await this._performFormValues()
   this._updateAppearance()
  } catch (error) {
   this._updateAppearance()
   errorDisplay(error)
  }
 }

 /**
  * @private
  */
 async _performFormValues() {
  try {
   const value = this.value
   if (value === "") {
    this._internalValue = undefined
   } else {
    this._internalValue = await this.getListModelFunction(value)
    if (this._internalValue === undefined) {
     this.value = ""
    }
   }
  } catch (error) {
   this.value = ""
   throw error
  }
 }

 get getListModelFunction() {
  return assertNotNullOrUndefined(this._getListModelFunction,
   getListModelFunctionMissingText())
 }

 set getListModelFunction(getListModelFunction) {
  /**
   * @private
   * @type {(value: string) =>
   *   Promise<import('../html/ListModel.js').ListModel<any, any> | undefined>}
   */
  this._getListModelFunction = getListModelFunction
 }

 /**
  * @private
  */
 _updateAppearance() {
  this.innerHTML = ""
  this.append(oneSelectionRenderer(this._internalValue, noSelectionText()))
 }

}

customElements.define(display_one_tag, DisplayOneElement)