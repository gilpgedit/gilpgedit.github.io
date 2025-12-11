import { hidden_property } from "../const/hidden_property.js"
import { name_attribute } from "../const/name_attribute.js"
import {
 required_attribute
} from "../const/required_attribute.js"
import { value_attribute } from "../const/value_attribute.js"
import {
 booleanAttributeNew
} from "../di/html/booleanAttributeNew.js"
import {
 stringAttributeNew
} from "../di/html/stringAttributeNew.js"
import { addStyleContent } from "../html/addStyleContent.js"
import { css } from "../html/css.js"
import { noScript } from "../html/noScript.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import { requiredText } from "../i18n/text/requiredText.js"
import { _ } from "../lite/_.js"
import { Signal } from "../Signal/Signal.js"
import { stringOrEmpty } from "../stringOrEmpty.js"

export const rich_editor_tag = "rich-editor"

addStyleContent(document.head, css`
  ${rich_editor_tag}, .${rich_editor_tag} {
   display: block;
   padding: 0.2em;
   overflow-x: auto;
   background-color: var(--backgroundColor);
   border: thin solid;
   max-width: 100%;
   resize: none
  }

  ${rich_editor_tag}[${hidden_property}], .${rich_editor_tag}[${hidden_property}] {
   display: none;
  }

 `.cssText)

/**
 * @typedef {Object} RichEditorElementOnly
 * @property {string | Signal<string>} [name]
 * @property {string | Signal<string>} [value]
 * @property {boolean | Signal<boolean>} [required]
 */
/**
 * @typedef {import(
 *    "../lite/parameter/LiteElementProperties.js").
 *                           LiteElementProperties<RichEditorElement> &
 *                                                  RichEditorElementOnly
 *                                                } RichEditorElementProperties
 */
/**
 * @param {import(
 *        "../lite/parameter/LiteElementParameter.js").
 *                                     LiteElementParameter<RichEditorElement,
 *                                     RichEditorElementProperties>[]} contents
 */
export function RichEditor(...contents) {
 return _(new RichEditorElement(), ...contents)
}

export class RichEditorElement extends HTMLElement {

 static get observedAttributes() {
  return [value_attribute, required_attribute]
 }

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof RichEditorElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(rich_editor_tag))
  }
 }

 constructor() {

  super()

  this._resize = this._resize.bind(this)
  this._change = this._change.bind(this)

  /**
  * @private
  * @readonly
  */
  this._value = stringAttributeNew(this, value_attribute)
  /**
  * @private
  * @readonly
  */
  this._name = stringAttributeNew(this, name_attribute)
  /**
  * @private
  * @readonly
  */
  this._required = booleanAttributeNew(this, required_attribute)

  /**
   * @private
   * @type {string}
   */
  this._customValidity = ""
  /**
   * @protected
   * @readonly
   */
  this._internals = this.attachInternals()

 }

 connectedCallback() {
  this.classList.add(rich_editor_tag)
  this.contentEditable = "true"
  this.tabIndex = 0
  addEventListener("resize", this._resize)
  this.addEventListener("input", this._change)
  this._displayValue()
  this._displayRequired()
 }

 disconnectedCallback() {
  removeEventListener("resize", this._resize)
  this.removeEventListener("input", this._change)
 }

 /**
  * @param {string} attributeName
  */
 attributeChangedCallback(attributeName) {
  switch (attributeName) {
   case value_attribute:
    this._displayValue()
    break
   case required_attribute:
    this._displayRequired()
    break
  }
 }

 get value() {
  return this._value.get()
 }

 set value(value) {
  this._value.set(value)
 }

 get name() {
  return this._name.get()
 }

 set name(name) {
  this._name.set(name)
 }

 get required() {
  return this.hasAttribute(required_attribute)
 }

 set required(required) {
  this.toggleAttribute(required_attribute, Boolean(required))
 }

 /**
  * @private
  */
 _change() {
  this.value = this.innerHTML
 }

 /**
  * @private
  */
 _resize() {
  this.style.height = "auto"
  this.style.height = `calc(${this.scrollHeight}px + 1em)`
 }


 /**
  * @private
  */
 _displayValue() {
  const value = this.value
  const noScriptValue = noScript(stringOrEmpty(value))
  if (value === noScriptValue) {
   if (value !== this.innerHTML) {
    this.innerHTML = value
   }
   this._internals.setFormValue(value)
   this._customValidity = ""
   this._checkValidity()
   this._resize()
  } else {
   this.value = noScriptValue
  }
 }

 /**
  * @private
  */
 _displayRequired() {
  this._checkValidity()
  this._resize()
 }

 get form() {
  return this._internals.form
 }

 get willValidate() {
  return this._internals.willValidate
 }

 /**
  * @param {string} message
  */
 setCustomValidity(message) {
  this._customValidity = message
  this._checkValidity()
 }

 /**
  * @returns {ValidityState}
  */
 get validity() {
  return this._internals.validity
 }

 checkValidity() {
  return this._internals.checkValidity()
 }

 reportValidity() {
  return this._internals.reportValidity()
 }

 get validationMessage() {
  return this._internals.validationMessage
 }

 /**
  * @returns {boolean}
  */
 _checkValidity() {
  if (this._customValidity) {
   this._internals.setValidity({ customError: true }, this._customValidity)
   return false
  } else if (this.required && !this.textContent) {
   this._internals.setValidity({ valueMissing: true }, requiredText())
   return false
  } else {
   this._internals.setValidity({})
   return true
  }
 }

}

RichEditorElement.formAssociated = true

customElements.define(rich_editor_tag, RichEditorElement)