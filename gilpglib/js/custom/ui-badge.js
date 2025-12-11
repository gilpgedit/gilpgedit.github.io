export const ui_badge_tag = "ui-badge"

export class UiBadge extends HTMLElement {

 connectedCallback() {
  this.style.display = "inline-block"
  this.style.verticalAlign = "top"
  this.style.fontSize = "small"
  this.style.padding = "0.2rem 0.5rem"
  this.style.borderRadius = "0.5em"
  this.style.float = "right"
 }

}

customElements.define(ui_badge_tag, UiBadge)