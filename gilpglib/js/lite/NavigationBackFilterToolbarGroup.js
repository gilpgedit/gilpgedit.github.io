import { Signal } from "../Signal/Signal.js"
import { BackA } from "./BackA.js"
import { NavigationFilterToolbarGroup } from "./NavigationFilterToolbarGroup.js"

/**
 * @param {string | Signal<string>} backHref
 * @param {boolean | Signal<boolean>} readMoreHidden
 * @param {(this: HTMLButtonElement, ev: MouseEvent) => any} readMoreListener
 * @param {string | Signal<string>} header
 * @param {import("./parameter/LiteGroupParameter.js").
 *    LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement;
 *   navigationOpenButton: HTMLButtonElement;
 *   headerOutput: HTMLOutputElement;
 *   filterHideButton: HTMLButtonElement;
 *   filterInput: HTMLInputElement;
 *   filterDisplayButton: HTMLButtonElement;
 *   searchButton: HTMLButtonElement;
 *   readMoreButton: HTMLButtonElement;
 *   backA: HTMLAnchorElement;
 *  }>[]} contents
 */
export function NavigationBackFilterToolbarGroup(backHref, readMoreHidden
 , readMoreListener, header, contents) {
 const backA = BackA({ href: backHref })
 const elements = NavigationFilterToolbarGroup(readMoreHidden, readMoreListener,
  header, contents)
 elements.liteNode.insertBefore(backA, elements.headerOutput)
 return { ...elements, backA }
}