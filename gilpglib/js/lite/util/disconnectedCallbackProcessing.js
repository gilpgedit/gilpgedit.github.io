import { observeConnection } from "../../html/observeConnection.js"
import {
 functionPropertyInvalidTemplate
} from "../../i18n/template/functionPropertyInvalidTemplate.js"

/**
 * @param {Node} node
 * @param {any} disconnectedCallback
 */
export function disconnectedCallbackProcessing(node, disconnectedCallback) {
 if (typeof disconnectedCallback !== "function")
  throw new Error(
   functionPropertyInvalidTemplate(disconnectedCallback.description))
 observeConnection({ node, disconnectedCallback })
}