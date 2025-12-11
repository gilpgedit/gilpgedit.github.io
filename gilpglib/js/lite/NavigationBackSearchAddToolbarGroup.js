import { Signal } from "../Signal/Signal.js"
import { BackA } from "./BackA.js"
import {
 NavigatioSearchAddToolbarGroup
} from "./NavigatioSearchAddToolbarGroup.js"

/**
 * @param {string | Signal<string>} backHref
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
 *   backA: HTMLAnchorElement;
 *  }>[]} contents
 */
export function NavigationBackSearchAddToolbarGroup(backHref, newHref, header
 , contents) {
 const backA = BackA({ href: backHref })
 const elements = NavigatioSearchAddToolbarGroup(newHref, header, contents)
 elements.liteNode.insertBefore(backA, elements.headerOutput)
 return { ...elements, backA }
}