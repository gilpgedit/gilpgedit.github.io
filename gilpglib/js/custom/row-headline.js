import { html } from "../html/html.js"
import { _ } from "../lite/_.js"

export const row_headline_tag = "row-headline"

/**
 * @param {import("../lite/parameter/LiteElementParameter.js").
 *                           LiteElementParameter<RowHeadlineElement,
 *                     import("../lite/parameter/LiteElementProperties.js").
 *                     LiteElementProperties<RowHeadlineElement>>[]} contents
 */
export function RowHeadline(...contents) {
 return _(new RowHeadlineElement(), ...contents)
}

export class RowHeadlineElement extends HTMLElement {

 /**
  * @private
  */
 _getStyle() {
  return html`
   <style>

    :host {
     display: block;
     font-weight: bold;
    }

    :host([hidden]) {
     display: none;
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
 }

}

customElements.define(row_headline_tag, RowHeadlineElement)