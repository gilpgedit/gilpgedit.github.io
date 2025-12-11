import { Signal } from "../Signal/Signal.js"
import { BackA } from "./BackA.js"
import {
 NavigationFilterAddToolbarGroup
} from "./NavigationFilterAddToolbarGroup.js"

/**
 * @param {string | Signal<string>} backHref
 * @param {string | Signal<string>} newHref
 * @param {string | Signal<string>} header
 * @param {boolean | Signal<boolean>} readMoreHidden
 * @param {(this: HTMLButtonElement, ev: MouseEvent) => any} readMoreListener
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement;
 *   navigationOpenButton: HTMLButtonElement;
 *   headerOutput: HTMLOutputElement;
 *   filterHideButton: HTMLButtonElement;
 *   filterInput: HTMLInputElement;
 *   filterDisplayButton: HTMLButtonElement;
 *   searchButton: HTMLButtonElement;
 *   readMoreButton: HTMLButtonElement;
 *   addA: HTMLAnchorElement;
 *  }>[]} contents
 */
export function NavigationBackFilterAddToolbarGroup(backHref, newHref, header
 , readMoreHidden, readMoreListener, contents) {
 const backA = BackA({ href: backHref })
 const elements = NavigationFilterAddToolbarGroup(
  newHref, header, readMoreHidden, readMoreListener, contents
 )
 elements.liteNode.insertBefore(backA, elements.headerOutput)
 return { ...elements, backA }
}