import { Signal } from "../../Signal/Signal.js"

/**
 * @typedef {Object} HTMLElementOnly
 * @property {string | Signal<string>} [accessKey] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/accessKey)
 * @property {string | Signal<string>} [autocapitalize] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/autocapitalize) 
 * @property {string | Signal<string>} [dir] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dir)
 * @property {boolean | Signal<boolean>} [draggable] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/draggable)
 * @property {boolean | Signal<boolean>} [hidden] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidden)
 * @property {boolean | Signal<boolean>} [inert] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inert)
 * @property {string | Signal<string>} [innerText] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/innerText)
 * @property {string | Signal<string>} [lang] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/lang)
 * @property {string | Signal<string>} [outerText] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/outerText)
 * @property {string | null | Signal<string | null>} [popover] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/popover)
 * @property {boolean | Signal<boolean>} [spellcheck] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/spellcheck)
 * @property {string | Signal<string>} [title] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/title)
 * @property {boolean | Signal<boolean>} [translate] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/translate)
 * @property {string | Signal<string>} [writingSuggestions]
 */
/**
 * @template {HTMLElement} ElementType
 * @typedef {import("./ElementProperties.js").ElementProperties<ElementType> &
 *  import("./ElementCSSInlineStyleProperties.js").
 *   ElementCSSInlineStyleProperties &
 *  import("./ElementContentEditableProperties.js").
 *   ElementContentEditableProperties &
 *  import("./GlobalEventHandlersProperties.js").
 *                                 GlobalEventHandlersProperties<ElementType> &
 *  import("./HTMLOrSVGElementProperties.js").HTMLOrSVGElementProperties &
 *  HTMLElementOnly &
 * {
 *  dataset?: {[s:string]: string | Signal<string>}
 * }} HTMLElementProperties
 */