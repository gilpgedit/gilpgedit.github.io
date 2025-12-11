import { checked_attribute } from "../const/checked_attribute.js"
import { name_attribute } from "../const/name_attribute.js"
import { booleanAttributeNew } from "../di/html/booleanAttributeNew.js"
import { stringAttributeNew } from "../di/html/stringAttributeNew.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import { _ } from "../lite/_.js"

export const bool_display_tag = "bool-display"

/**
 * @typedef {Object} BoolDisplayElementOnly
 * @property {string} [name]
 * @property {boolean} [checked] 
 */
/**
 * @typedef {import("../lite/parameter/LiteElementProperties.js").
 *        LiteElementProperties<BoolDisplayElement> & BoolDisplayElementOnly
 *                                               } BoolDisplayElementProperties
 */
/**
 * @param {import("../lite/parameter/LiteElementParameter.js").
 *                               LiteElementParameter<BoolDisplayElement,
 *                                    BoolDisplayElementProperties>[]} contents
 */
export function BoolDisplay(...contents) {
 return _(new BoolDisplayElement(), ...contents)
}

export class BoolDisplayElement extends HTMLParagraphElement {

 static get observedAttributes() {
  return [checked_attribute]
 }

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof BoolDisplayElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(bool_display_tag))
  }
 }

 constructor() {
  super()
  /**
   * @readonly
   * @private
   */
  this._name = stringAttributeNew(this, name_attribute)
  /**
   * @readonly
   * @private
   */
  this._checked = booleanAttributeNew(this, checked_attribute)
 }

 connectedCallback() {
  this._displayChecked()
 }

 /**
  * @param {string} attributeName
  */
 attributeChangedCallback(attributeName) {
  switch (attributeName) {
   case checked_attribute:
    this._displayChecked()
    break
  }
 }

 get name() {
  return this._name.get()
 }

 /**
  * @param {string} name 
  */
 set name(name) {
  this._name.set(name)
 }

 get checked() {
  return this._checked.get()
 }

 set checked(value) {
  this._checked.set(value)
 }

 _displayChecked() {
  this.hidden = !this.checked
 }

}

customElements.define(bool_display_tag, BoolDisplayElement, { extends: "p" })