import { Signal } from "../Signal/Signal.js"
import { CancelA } from "./CancelA.js"
import { NavigationToolbarGroup } from "./NavigationToolbarGroup.js"
import { SaveButton } from "./SaveButton.js"

/**
 * @param {string | Signal<string>} href
 * @param {string | Signal<string>} header
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement;
 *   navigationOpenButton: HTMLButtonElement;
 *   headerOutput: HTMLOutputElement;
 *   cancalA: HTMLAnchorElement;
 *   saveButton: HTMLButtonElement;
 *  }>[]} contents
 */
export function NavigationCancelASaveToolbarGroup(href, header, contents) {
 const cancalA = CancelA({ href })
 const saveButton = SaveButton()
 const elements = NavigationToolbarGroup(header, [saveButton, ...contents])
 elements.liteNode.insertBefore(cancalA, elements.headerOutput)
 return { ...elements, cancalA, saveButton }
}
