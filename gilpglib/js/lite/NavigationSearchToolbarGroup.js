import { Signal } from "../Signal/Signal.js"
import { NavigationToolbarGroup } from "./NavigationToolbarGroup.js"
import { SearchButton } from "./SearchButton.js"

/**
 * @param {string | Signal<string>} header
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement;
 *   navigationOpenButton: HTMLButtonElement;
 *   headerOutput: HTMLOutputElement;
 *   searchButton: HTMLButtonElement;
 *  }>[]} contents
 */
export function NavigationSearchToolbarGroup(header, contents) {
 const searchButton = SearchButton()
 const elements = NavigationToolbarGroup(header, [searchButton, ...contents])
 return { ...elements, searchButton }
}