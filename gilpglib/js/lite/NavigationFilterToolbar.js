import { Signal } from "../Signal/Signal.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import { NavigationFilterToolbarGroup } from "./NavigationFilterToolbarGroup.js"

/**
 * @param {{
 *   header: string | Signal<string>,
 *   readMoreHidden: boolean | Signal<boolean>,
 *   readMoreListener: (this: HTMLButtonElement, ev: MouseEvent) => any
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement,
 *   navigationOpenButton: HTMLButtonElement,
 *   headerOutput: HTMLOutputElement,
 *   filterHideButton: HTMLButtonElement,
 *   filterInput: HTMLInputElement,
 *   filterDisplayButton: HTMLButtonElement,
 *   searchButton: HTMLButtonElement,
 *   readMoreButton: HTMLButtonElement,
 *  }>[]} contents
 */
export function NavigationFilterToolbar(
 { header, readMoreHidden, readMoreListener }, ...contents) {
 return executeLiteGroupFilterFunctions(NavigationFilterToolbarGroup(
  readMoreHidden, readMoreListener, header, contents), contents)
}