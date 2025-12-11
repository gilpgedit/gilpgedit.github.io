import { Signal } from "../../Signal/Signal.js"

/**
 * @template {HTMLElement} ElementType
 * @typedef {Object} LiteElementOnly
 * @property {[string | Signal<string>, string | Signal<string>]
 *                                                       } [tiltleAndAccessKey]
 * @property {(this: ElementType) => any} [nodeEffect]
 * @property {(this: ElementType) => any} [connectedCallback]
 * @property {(this: ElementType) => any} [disconnectedCallback]
 * @property {{
 *    attributeNames: string[],
 *    attributeChangedCallback: (
 *     element: ElementType,
 *     attributeName: string,
 *     oldValue: string | null,
 *     newValue: string | null
 *    ) => any
 *   }} [observeAttributes]
 * @property {(
 *    [
 *      keyof GlobalEventHandlersEventMap | string,
 *      (this: ElementType, ev: Event) => any,
 *      boolean | AddEventListenerOptions
 *     ]
 *    |
 *     [
 *      keyof GlobalEventHandlersEventMap | string,
 *       (this: ElementType, ev: Event) => any
 *     ]
 *    )[]} [eventListeners]
 */
/**
 * @template {HTMLElement} ElementType
 * @typedef {import("./HTMLElementProperties.js").
 *   HTMLElementProperties<ElementType> & LiteElementOnly<ElementType>
 *                                                      } LiteElementProperties
 */