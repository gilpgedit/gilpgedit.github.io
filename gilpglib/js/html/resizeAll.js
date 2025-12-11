import { eventNew } from "../di/html/eventNew.js"

export function resizeAll() {
 dispatchEvent(eventNew("resize"))
}