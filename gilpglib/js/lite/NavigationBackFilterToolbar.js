import { Signal } from "../Signal/Signal.js"
import { State } from "../Signal/State.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import {
 NavigationBackFilterToolbarGroup
} from "./NavigationBackFilterToolbarGroup.js"

/**
 * @param {{
 *   backHref: string | Signal<string>,
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
 *   backA: HTMLAnchorElement;
 *  }>[]} contents
 */
export function NavigationBackFilterToolbar(
 { backHref, header, readMoreHidden, readMoreListener }, ...contents) {
 return executeLiteGroupFilterFunctions(NavigationBackFilterToolbarGroup(
  backHref, readMoreHidden, readMoreListener, header, contents), contents)
}