import { Signal } from "../Signal/Signal.js"
import { BackA } from "./BackA.js"
import { NavigationToolbarGroup } from "./NavigationToolbarGroup.js"

/**
 * @param {string | Signal<string>} backHref
 * @param {string | Signal<string>} header
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *    liteNode: HTMLMenuElement;
 *    navigationOpenButton: HTMLButtonElement;
 *    headerOutput: HTMLOutputElement;
 *    backA: HTMLAnchorElement;
 *  }>[]} contents
 */
export function NavigationBackToolbarGroup(backHref, header, contents) {
 const backA = BackA({ href: backHref })
 const elements = NavigationToolbarGroup(header, contents)
 elements.liteNode.insertBefore(backA, elements.headerOutput)
 return { ...elements, backA }
}