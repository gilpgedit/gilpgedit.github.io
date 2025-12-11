import { Signal } from "../Signal/Signal.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import {
 NavigationBackEditDeleteToolbarGroup
} from "./NavigationBackEditDeleteToolbarGroup.js"

/**
 * @param {{
 *   header: string | Signal<string>,
 *   href: string | Signal<string>,
 *   editListener: (this: HTMLButtonElement, ev: MouseEvent) => any,
 *   deleteListener: (this: HTMLButtonElement, ev: MouseEvent) => any,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement,
 *   navigationOpenButton: HTMLButtonElement,
 *   headerOutput: HTMLOutputElement,
 *   backA: HTMLAnchorElement,
 *   editButton: HTMLButtonElement,
 *   deleteButton: HTMLButtonElement,
 *  }>[]} contents
 */
export function NavigationBackEditDeleteToolbar(
 { header, href, editListener, deleteListener }, ...contents) {
 return executeLiteGroupFilterFunctions(NavigationBackEditDeleteToolbarGroup(
  editListener, deleteListener, href, header, contents), contents)
}