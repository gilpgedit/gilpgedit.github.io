import { Signal } from "../Signal/Signal.js"
import { AddA } from "./AddA.js"
import { NavigationSearchToolbarGroup } from "./NavigationSearchToolbarGroup.js"

/**
 * @param {string | Signal<string>} newHref
 * @param {string | Signal<string>} header
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement;
 *   navigationOpenButton: HTMLButtonElement;
 *   headerOutput: HTMLOutputElement;
 *   searchButton: HTMLButtonElement;
 *   addA: HTMLAnchorElement;
 *  }>[]} contents
 */
export function NavigatioSearchAddToolbarGroup(newHref, header, contents) {
 const addA = AddA({ href: newHref })
 const elements = NavigationSearchToolbarGroup(header, [addA, ...contents])
 return { ...elements, addA }
}
