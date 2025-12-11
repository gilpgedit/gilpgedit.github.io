/**
 * @param {() => any} domUpdateCallback
 */
export function viewTransition(domUpdateCallback) {
 if (typeof document["startViewTransition"] === "function") {
  document["startViewTransition"](domUpdateCallback)
 } else {
  domUpdateCallback()
 }
}