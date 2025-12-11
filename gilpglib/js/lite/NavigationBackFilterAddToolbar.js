import { Signal } from "../Signal/Signal.js"
import { State } from "../Signal/State.js"
import {
 NavigationBackFilterAddToolbarGroup
} from "./NavigationBackFilterAddToolbarGroup.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"

/**
 * @param {{
 *   backHref: string | Signal<string>,
 *   newHref: string | Signal<string>,
 *   header: string | Signal<string>,
 *   readMoreHidden: boolean | State<boolean>
 *   readMoreListener: (this: HTMLButtonElement, ev: MouseEvent) => any,
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
 *   backA: HTMLAnchorElement;
 *  }>[]} contents
 */
export function NavigationBackFilterAddToolbar({
 backHref, newHref, header, readMoreHidden, readMoreListener
}, ...contents) {
 return executeLiteGroupFilterFunctions(NavigationBackFilterAddToolbarGroup(
  backHref, newHref, header, readMoreHidden, readMoreListener, contents),
  contents)
}