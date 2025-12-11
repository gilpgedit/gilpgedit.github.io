import { Signal } from "../Signal/Signal.js"
import { CancelButton } from "./CancelButton.js"
import { NavigationToolbarGroup } from "./NavigationToolbarGroup.js"
import { SaveButton } from "./SaveButton.js"

/**
 * @param {(this: HTMLButtonElement, ev: MouseEvent) => any} cancelListener
 * @param {string | Signal<string>} header
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement;
 *   navigationOpenButton: HTMLButtonElement;
 *   headerOutput: HTMLOutputElement;
 *   cancelButton: HTMLButtonElement;
 *   saveButton: HTMLButtonElement;
 *  }>[]} contents
 */
export function NavigationCancelSaveToolbarGroup(cancelListener, header
 , contents) {
 const cancelButton = CancelButton({ onclick: cancelListener })
 const saveButton = SaveButton()
 const elements = NavigationToolbarGroup(header, [saveButton, ...contents])
 elements.liteNode.insertBefore(cancelButton, elements.headerOutput)
 return { ...elements, cancelButton, saveButton }
}
