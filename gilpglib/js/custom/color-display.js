import { name_attribute } from "../const/name_attribute.js"
import { value_attribute } from "../const/value_attribute.js"
import { stringAttributeNew } from "../di/html/stringAttributeNew.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import { _ } from "../lite/_.js"

export const color_display_tag = "color-display"

/**
 * @typedef {Object} ColorDisplayElementOnly
 * @property {string} [name]
 * @property {string} [value] 
 */
/**
 * @typedef {import("../lite/parameter/LiteElementProperties.js").
 *       LiteElementProperties<ColorDisplayElement> & ColorDisplayElementOnly
 *                                              } ColorDisplayElementProperties
 */
/**
 * @param {import("../lite/parameter/LiteElementParameter.js").
 *                               LiteElementParameter<ColorDisplayElement,
 *                                    ColorDisplayElementProperties>[]} contents
 */
export function ColorDisplay(...contents) {
 return _(new ColorDisplayElement(), ...contents)
}

export class ColorDisplayElement extends HTMLParagraphElement {

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof ColorDisplayElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(color_display_tag))
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
  this._value = stringAttributeNew(this, value_attribute)
 }

 connectedCallback() {
  this.style.border = "solid"
  this.style.height = "1em"
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

 get value() {
  return this._value.get()
 }

 set value(value) {
  this.style.backgroundColor = value
  this._value.set(value)
 }

}

customElements.define(color_display_tag, ColorDisplayElement, { extends: "p" })