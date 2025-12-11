import { Signal } from "../Signal/Signal.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import {
 NavigationCancelSaveToolbarGroup
} from "./NavigationCancelSaveToolbarGroup.js"

/**
 * @param {{
 *   header: string | Signal<string>,
 *   cancelListener: (this: HTMLButtonElement, ev: MouseEvent) => any
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement,
 *   navigationOpenButton: HTMLButtonElement,
 *   headerOutput: HTMLOutputElement,
 *   cancelButton: HTMLButtonElement,
 *   saveButton: HTMLButtonElement,
 *  }>[]} contents
 */
export function NavigationCancelSaveToolbar({ header, cancelListener }
 , ...contents) {
 return executeLiteGroupFilterFunctions(NavigationCancelSaveToolbarGroup(
  cancelListener, header, contents), contents)
}