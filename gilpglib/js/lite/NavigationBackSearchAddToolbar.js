import { Signal } from "../Signal/Signal.js"
import {
 NavigationBackSearchAddToolbarGroup
} from "./NavigationBackSearchAddToolbarGroup.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"

/**
 * @param {{
 *   backHref: string | Signal<string>,
 *   newHref: string | Signal<string>,
 *   header: string | Signal<string>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *  LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement;
 *   navigationOpenButton: HTMLButtonElement;
 *   headerOutput: HTMLOutputElement;
 *   searchButton: HTMLButtonElement;
 *   addA: HTMLAnchorElement;
 *   backA: HTMLAnchorElement;
 *  }>[]} contents
 */
export function NavigationBackSearchAddToolbar(
 { backHref, newHref, header }, ...contents) {
 return executeLiteGroupFilterFunctions(NavigationBackSearchAddToolbarGroup(
  backHref, newHref, header, contents), contents)
}