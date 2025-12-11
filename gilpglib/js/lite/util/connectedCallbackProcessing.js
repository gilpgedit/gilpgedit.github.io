import { observeConnection } from "../../html/observeConnection.js"
import {
 functionPropertyInvalidTemplate
} from "../../i18n/template/functionPropertyInvalidTemplate.js"

/**
 * @param {Node} node
 * @param {any} connectedCallback
 */
export function connectedCallbackProcessing(node, connectedCallback) {
 if (typeof connectedCallback !== "function")
  throw new Error(
   functionPropertyInvalidTemplate(connectedCallback.description))
 observeConnection({ node, connectedCallback })
}