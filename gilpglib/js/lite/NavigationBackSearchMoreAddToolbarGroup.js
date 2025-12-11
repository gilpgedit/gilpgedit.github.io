import { Signal } from "../Signal/Signal.js"
import { AddA } from "./AddA.js"
import { BackA } from "./BackA.js"
import { NavigationToolbarGroup } from "./NavigationToolbarGroup.js"
import { ReadMoreButton } from "./ReadMoreButton.js"
import { SearchButton } from "./SearchButton.js"

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
 *   searchButton: HTMLButtonElement;
 *   readMoreButton: HTMLButtonElement;
 *   addA: HTMLAnchorElement;
 *  }>[]} contents
 */
export function NavigationBackSearchMoreAddToolbarGroup(backHref, newHref
 , header, readMoreHidden, readMoreListener, contents) {

 const backA = BackA({ href: backHref })

 const searchButton = SearchButton()

 const readMoreButton = ReadMoreButton({
  hidden: readMoreHidden,
  onclick: readMoreListener
 })

 const addA = AddA({ href: newHref })

 const elements = NavigationToolbarGroup(
  header, [searchButton, readMoreButton, addA, ...contents]
 )
 elements.liteNode.insertBefore(backA, elements.headerOutput)
 return { ...elements, backA, searchButton, readMoreButton, addA }
}