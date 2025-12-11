import { getAttribute } from "./getAttribute.js"

export class StringAttribute {

 /**
  * @param {HTMLElement} element
  * @param {string} name
  */
 constructor(element, name) {
  this.element = element
  this.name = name
 }

 get() {
  return getAttribute(this.element, this.name)
 }

 /**
  * @param {string} value
  */
 set(value) {
  this.element.setAttribute(this.name, value)
 }

}