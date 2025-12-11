import { hidden_property } from "../const/hidden_property.js"
import { value_attribute } from "../const/value_attribute.js"
import {
 stringAttributeNew
} from "../di/html/stringAttributeNew.js"
import { addStyleContent } from "../html/addStyleContent.js"
import { css } from "../html/css.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import { _ } from "../lite/_.js"
import { Signal } from "../Signal/Signal.js"

export const value_html_tag = "value-html"

addStyleContent(document.head, css`

  ${value_html_tag} iframe, .${value_html_tag} iframe {
   box-sizing: border-box;
   width: 100%;
   resize: both;
  }

  ${value_html_tag}[${hidden_property}], .${value_html_tag}[${hidden_property}] {
   display: none;
  }

 `.cssText)

/**
 * @typedef {Object} ValueIHtmlOnly
 * @property {string | Signal<string>} [value]
 */
/**
 * @typedef {import(
 *    "../lite/parameter/LiteElementProperties.js").
 *               LiteElementProperties<HTMLElement> & ValueIHtmlOnly
 *                                                 } ValueHtmlElementProperties
 */
/**
 * @param {import("../lite/parameter/LiteElementParameter.js").
 *    LiteElementParameter<HTMLElement, ValueHtmlElementProperties>[]} contents
 */
export function ValueHtml(...contents) {
 return _(new ValueHtmlElement(), ...contents)
}

export class ValueHtmlElement extends HTMLElement {

 static get observedAttributes() {
  return [value_attribute]
 }

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof ValueHtmlElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(value_html_tag))
  }
 }

 constructor() {

  super()

  /**
  * @private
  * @readonly
  */
  this._value = stringAttributeNew(this, value_attribute)

 }

 connectedCallback() {
  this.classList.add(value_html_tag)
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

 /**
  * @private
  */
 _displayValue() {
  this.innerHTML = this.value
 }

}

customElements.define(value_html_tag, ValueHtmlElement, { extends: "figure" })