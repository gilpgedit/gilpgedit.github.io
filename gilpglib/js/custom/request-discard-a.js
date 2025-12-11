import { requestDiscard } from "../html/requestDiscard.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"

export const request_discard_a_is = "request-discard-a"

export class RequestDiscardAElement extends HTMLAnchorElement {

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof RequestDiscardAElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(request_discard_a_is))
  }
 }

 connectedCallback() {
  this.addEventListener("click", requestDiscard)
 }

 disconnectedCallback() {
  this.removeEventListener("click", requestDiscard)
 }

}

customElements
 .define(request_discard_a_is, RequestDiscardAElement, { extends: "a" })