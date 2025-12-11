import { Signal } from "../Signal/Signal.js"
import { DeleteButton } from "./DeleteButton.js"
import { EditButton } from "./EditButton.js"
import { NavigationBackToolbarGroup } from "./NavigationBackToolbarGroup.js"

/**
 * @param {(this: HTMLButtonElement, ev: MouseEvent) => any} editListener
 * @param {(this: HTMLButtonElement, ev: MouseEvent) => any} deleteListener
 * @param {string | Signal<string>} backHref
 * @param {string | Signal<string>} header
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement;
 *   navigationOpenButton: HTMLButtonElement;
 *   headerOutput: HTMLOutputElement;
 *   backA: HTMLAnchorElement;
 *   editButton: HTMLButtonElement;
 *   deleteButton: HTMLButtonElement;
 *  }>[]} contents
 */
export function NavigationBackEditDeleteToolbarGroup(editListener
 , deleteListener, backHref, header, contents) {
 const editButton = EditButton({ onclick: editListener })
 const deleteButton = DeleteButton({ onclick: deleteListener })
 const elements = NavigationBackToolbarGroup(backHref, header,
  [editButton, deleteButton, ...contents])
 return { ...elements, deleteButton }
}