import {
 gilpgrequestdiscard_event
} from "../const/gilpgrequestdiscard_event.js"
import { eventNew } from "../di/html/eventNew.js"

/**
 * Send an event requesting discard the page contents. If any event listener
 * blocks the discard, page can't be left.
 * @param {Event} event
 */
export function requestDiscard(event) {
 if (
  !dispatchEvent(eventNew(gilpgrequestdiscard_event, { cancelable: true }))) {
  event.preventDefault()
 }
}