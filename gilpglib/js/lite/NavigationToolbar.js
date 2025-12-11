import { Signal } from "../Signal/Signal.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import { NavigationToolbarGroup } from "./NavigationToolbarGroup.js"

/**
 * @param {{header: string | Signal<string>}} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement,
 *   navigationOpenButton: HTMLButtonElement,
 *   headerOutput: HTMLOutputElement,
 *  }>[]} contents
 */
export function NavigationToolbar({ header }, ...contents) {
 return executeLiteGroupFilterFunctions(
  NavigationToolbarGroup(header, contents), contents)
}