import { Signal } from "../Signal/Signal.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import {
 NavigatioSearchAddToolbarGroup
} from "./NavigatioSearchAddToolbarGroup.js"

/**
 * @param {{
 *   newHref: string | Signal<string>,
 *   header: string | Signal<string>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement,
 *   navigationOpenButton: HTMLButtonElement,
 *   headerOutput: HTMLOutputElement,
 *   searchButton: HTMLButtonElement,
 *   addA: HTMLAnchorElement,
 *  }>[]} contents
 */
export function NavigatioSearchAddToolbar({ newHref, header }, ...contents) {
 return executeLiteGroupFilterFunctions(
  NavigatioSearchAddToolbarGroup(newHref, header, contents), contents)
}