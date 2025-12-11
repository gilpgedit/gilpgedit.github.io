import { Signal } from "../../Signal/Signal.js"

/**
 * @template {Element} ElementType
 * @typedef {Object} ElementOnly
 * @property {string | Signal<string>} [id] Returns the value of element's id content attribute. Can be set to change it.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/id)
 * @property {string | Signal<string> |
 *           import("../../html/HtmlText.js").HtmlText |
 *           Signal<import("../../html/HtmlText.js").HtmlText>} [innerHTML] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/innerHTML)
 * @property {((this: ElementType, ev: Event) => any) | null} [onfullscreenchange] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenchange_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onfullscreenerror] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenerror_event) 
 * @property {string | Signal<string> |
 *                import("../../html/HtmlText.js").HtmlText |
 *               Signal<import("../../html/HtmlText.js").HtmlText>} [outerHTML] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/outerHTML)
 * @property {number | Signal<number>} [scrollLeft] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollLeft)
 * @property {number | Signal<number>} [scrollTop] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTop)
 * @property {string | Signal<string>} [slot] Returns the value of element's slot content attribute. Can be set to change it.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/slot)
 */
/**
 * @template {Element} ElementType
 * @typedef {import("./NodeProperties.js").NodeProperties &
 *  import("./ARIAMixinProperties.js").ARIAMixinProperties &
 *  ElementOnly<ElementType> &
 *  {
 *   className?: {[s: string]: boolean | Signal<boolean>;}
 *  }} ElementProperties
 */