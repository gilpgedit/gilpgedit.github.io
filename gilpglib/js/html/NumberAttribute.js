import { getAttribute } from "./getAttribute.js"

export class NumberAttribute {

 /**
  * @param {HTMLElement} element
  * @param {string} name
  */
 constructor(element, name) {
  this.element = element
  this.name = name
 }

 get() {
  const value = getAttribute(this.element, this.name)
  return value ? parseFloat(value) : NaN
 }

 /**
  * @param {number} value
  */
 set(value) {
  this.element.setAttribute(this.name, isNaN(value) ? "" : value.toString())
 }

}