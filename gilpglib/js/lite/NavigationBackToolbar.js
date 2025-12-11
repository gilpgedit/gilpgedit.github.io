import { Signal } from "../Signal/Signal.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import { NavigationBackToolbarGroup } from "./NavigationBackToolbarGroup.js"

/**
 * @param {{
 *   header: string | Signal<string>,
 *   backHref: string | Signal<string>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement,
 *   navigationOpenButton: HTMLButtonElement,
 *   headerOutput: HTMLOutputElement,
 *   backA: HTMLAnchorElement
 *  }>[]} contents
 */
export function NavigationBackToolbar({ header, backHref }, ...contents) {
 return executeLiteGroupFilterFunctions(NavigationBackToolbarGroup(backHref,
  header, contents), contents)
}