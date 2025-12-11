import { Signal } from "../Signal/Signal.js"
import { State } from "../Signal/State.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import { NavigationFilterAddToolbarGroup } from "./NavigationFilterAddToolbarGroup.js"

/**
 * @param {{
 *   newHref: string | Signal<string>,
 *   header: string | Signal<string>,
 *   readMoreHidden: boolean | State<boolean>
 *   readMoreListener: (this: HTMLButtonElement, ev: MouseEvent) => any
 *  }} _attributes
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
export function NavigationFilterAddToolbar(
 { newHref, header, readMoreHidden, readMoreListener }, ...contents) {
 return executeLiteGroupFilterFunctions(NavigationFilterAddToolbarGroup(
  newHref, header, readMoreHidden, readMoreListener, contents), contents)
}