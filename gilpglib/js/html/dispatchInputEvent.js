import { eventNew } from "../di/html/eventNew.js"

/** @param {Element} element */
export function dispatchInputEvent(element) {
 element.dispatchEvent(
  eventNew("input", { bubbles: true, cancelable: false, composed: true }))
}