import { order_slot } from "../const/order_slot.js"
import { html } from "../html/html.js"
import { _ } from "../lite/_.js"


export const ordered_render_tag = "ordered-render"

/**
 * @param {import("../lite/parameter/LiteElementParameter.js").
 *                           LiteElementParameter<OrderedRenderElement,
 *                     import("../lite/parameter/LiteElementProperties.js").
 *                     LiteElementProperties<OrderedRenderElement>>[]} contents
 */
export function OrderedRender(...contents) {
 return _(new OrderedRenderElement(), ...contents)
}

export class OrderedRenderElement extends HTMLElement {
 constructor() {
  super()
  const shadow = this.attachShadow({ mode: "open" })
  shadow.innerHTML = html`
   <style>

    :host {
     flex: 1 1;
     display: flex;
     gap: var(--gap, 0.5rem);
    }

    :host([hidden]) {
     display: none;
    }

    #order {
     flex: 0 0;
     display: block;
     min-width: 2.5rem;
     text-align: end;
    }

    #content {
     flex: 1 1;
     display: block;
    }

   </style>
   <span id="order">
    <slot name="${order_slot}"></slot>
   </span>
   <span id="content">
    <slot></slot>
   </span>
  `.innerHTML
 }
}

customElements.define(ordered_render_tag, OrderedRenderElement)