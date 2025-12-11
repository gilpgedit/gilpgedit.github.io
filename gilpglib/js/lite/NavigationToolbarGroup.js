import { Signal } from "../Signal/Signal.js"
import { BasicToolbar } from "./BasicToolbar.js"
import { liteGroupFilter } from "./util/liteGroupFilter.js"
import { NavigationOpenButton } from "./NavigationOpenButton.js"
import { output } from "./output.js"

/**
 * @param {string | Signal<string>} header
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement, {
 *    liteNode: HTMLMenuElement;
 *    navigationOpenButton: HTMLButtonElement;
 *    headerOutput: HTMLOutputElement;
 *    }>[]} contents
 */
export function NavigationToolbarGroup(header, contents) {

 const navigationOpenButton = NavigationOpenButton()
 const headerOutput = output({ value: header })
 const liteNode = BasicToolbar(navigationOpenButton, headerOutput,
  ...liteGroupFilter(contents))

 return { liteNode, navigationOpenButton, headerOutput }

}