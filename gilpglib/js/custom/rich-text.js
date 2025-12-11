import { hidden_property } from "../const/hidden_property.js"
import { name_attribute } from "../const/name_attribute.js"
import { value_attribute } from "../const/value_attribute.js"
import {
 stringAttributeNew
} from "../di/html/stringAttributeNew.js"
import { addStyleContent } from "../html/addStyleContent.js"
import { css } from "../html/css.js"
import { noScript } from "../html/noScript.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import { _ } from "../lite/_.js"
import { Signal } from "../Signal/Signal.js"
import { stringOrEmpty } from "../stringOrEmpty.js"

export const rich_text_tag = "rich-text"

addStyleContent(document.head, css`
  ${rich_text_tag}, .${rich_text_tag} {
   display: block;
   box-sizing: border-box;
   padding: 0.2em;
   background-color: var(--backgroundColor);
   border: thin solid;
   max-width: 100%;
   resize: none
  }

  ${rich_text_tag}[${hidden_property}], .${rich_text_tag}[${hidden_property}] {
   display: none;
  }

 `.cssText)

/**
 * @typedef {Object} RichTextElementOnly
 * @property {string | Signal<string>} [name]
 * @property {string | Signal<string>} [value]
 * @property {boolean | Signal<boolean>} [required]
 */
/**
 * @typedef {import(
 *    "../lite/parameter/LiteElementProperties.js").
 *                           LiteElementProperties<RichTextElement> &
 *                                                  RichTextElementOnly
 *                                                  } RichTextElementProperties
 */
/**
 * @param {import(
 *        "../lite/parameter/LiteElementParameter.js").
 *                                     LiteElementParameter<RichTextElement,
 *                                       RichTextElementProperties>[]} contents
 */
export function RichText(...contents) {
 return _(new RichTextElement(), ...contents)
}

export class RichTextElement extends HTMLElement {

 static get observedAttributes() {
  return [value_attribute]
 }

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof RichTextElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(rich_text_tag))
  }
 }

 constructor() {

  super()

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

 }

 connectedCallback() {
  this.classList.add(rich_text_tag)
  this._displayValue()
 }

 /**
  * @param {string} attributeName
  */
 attributeChangedCallback(attributeName) {
  switch (attributeName) {
   case value_attribute:
    this._displayValue()
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

 /**
  * @private
  */
 _displayValue() {
  const value = this.value
  const noScriptValue = noScript(stringOrEmpty(value))
  if (value === noScriptValue) {
   this.innerHTML = value
  } else {
   this.value = value
  }
 }

}

customElements.define(rich_text_tag, RichTextElement)