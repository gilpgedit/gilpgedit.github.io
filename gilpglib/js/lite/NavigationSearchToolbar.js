import { Signal } from "../Signal/Signal.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import { NavigationSearchToolbarGroup } from "./NavigationSearchToolbarGroup.js"

/**
 * @param {{
 *   header: string | Signal<string>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement,
 *   navigationOpenButton: HTMLButtonElement,
 *   headerOutput: HTMLOutputElement,
 *   searchButton: HTMLButtonElement,
 *  }>[]} contents
 */
export function NavigationSearchToolbar({ header }, ...contents) {
 return executeLiteGroupFilterFunctions(
  NavigationSearchToolbarGroup(header, contents), contents)
}