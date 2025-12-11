import { Signal } from "../Signal/Signal.js"
import { AddA } from "./AddA.js"
import { NavigationFilterToolbarGroup } from "./NavigationFilterToolbarGroup.js"

/**
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
export function NavigationFilterAddToolbarGroup(newHref, header, readMoreHidden
 , readMoreListener, contents) {
 const addA = AddA({ href: newHref })
 const elements = NavigationFilterToolbarGroup(readMoreHidden, readMoreListener,
  header, [addA, ...contents])
 return { ...elements, addA }
}