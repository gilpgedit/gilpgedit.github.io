import { Signal } from "../Signal/Signal.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import {
 NavigationCancelASaveToolbarGroup
} from "./NavigationCancelASaveToolbarGroup.js"

/**
 * @param {{
 *   header: string | Signal<string>,
 *   href: string | Signal<string>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *    LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement,
 *   navigationOpenButton: HTMLButtonElement,
 *   headerOutput: HTMLOutputElement,
 *   cancalA: HTMLAnchorElement,
 *   saveButton: HTMLButtonElement,
 *  }>[]} contents
 */
export function NavigationCancelASaveToolbar({ header, href }, ...contents) {
 return executeLiteGroupFilterFunctions(NavigationCancelASaveToolbarGroup(href,
  header, contents), contents)
}