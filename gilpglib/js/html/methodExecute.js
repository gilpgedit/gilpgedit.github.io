import { functionNameForHtml } from "./functionNameForHtml.js"
import { errorDisplay } from "../di/errorDisplay.js"
import { getParentNode } from "./getParentNode.js"

export const methodExecute_function = functionNameForHtml(methodExecute)

/**
 * @param { HTMLElement } elementThatInvokes
 * @param { string } methodName
 * @param { Event } event
 */
export function methodExecute(elementThatInvokes, methodName, event) {

 try {

  let parent = getParentNode(elementThatInvokes)

  while (parent) {
   const method = parent[methodName]
   if (typeof method === "function") {
    functionExecute(method, parent, event)
    break
   }
   parent = getParentNode(parent)
  }

  if (!parent) {
   const method = window[methodName]
   if (typeof method === "function") {
    functionExecute(method, parent, event)
   }
  }

 } catch (error) {

  errorDisplay(error)

 }

}

window[methodExecute_function] = methodExecute

/**
 * @param {function} method
 * @param {ParentNode | null} parent
 * @param {Event} event
 */
function functionExecute(method, parent, event) {
 const result = method.call(parent, event)
 if (result instanceof Promise) {
  result.catch(errorDisplay)
 }
}
