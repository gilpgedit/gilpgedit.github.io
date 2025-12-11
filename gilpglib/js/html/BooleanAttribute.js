export class BooleanAttribute {

 /**
  * @param {HTMLElement} element
  * @param {string} name
  */
 constructor(element, name) {
  this.element = element
  this.name = name
 }

 get() {
  return this.element.hasAttribute(this.name)
  }

 /**
  * @param {boolean} value
  */
 set(value) {
  this.element.toggleAttribute(this.name, value)
 }

}