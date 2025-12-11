import {
 connectedCallback_property
} from "../const/connectedCallback_property.js"
import {
 disconnectedCallback_property
} from "../const/disconnectedCallback_property.js"
import { nodeEffect_property } from "../const/nodeEffect_property.js"
import { mapNew } from "../di/mapNew.js"
import { observeConnection } from "../html/observeConnection.js"
import { assignNodeProperty } from "./util/assignNodeProperty.js"
import {
 connectedCallbackProcessing
} from "./util/connectedCallbackProcessing.js"
import {
 disconnectedCallbackProcessing
} from "./util/disconnectedCallbackProcessing.js"
import { disposeEffects } from "./util/disposeEffects.js"
import { elementEffectProcessing } from "./util/elementEffectProcessing.js"
import { executeEffects } from "./util/executeEffects.js"
import { propertiesProcessing } from "./util/propertiesProcessing.js"

/**
 * The textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Text)
 * @param {import("./parameter/LiteTextParameter.js").LiteTextParameter[]
 *                                                                   } contents
 */
export function TextNode(...contents) {

 const node = new Text()

 /**
  * @type {Map<() => any, () => any>}
  */
 const effects = mapNew()

 for (let i = 0, length = contents.length; i < length; i++) {
  const content = contents[i]
  switch (typeof content) {
   case "undefined":
    continue
   case "string":
    node.data += content
    continue
   case "number":
    node.data += content.toString()
    continue
   case "function":
    content(node)
    continue
   default:
    if (content === null) {
     continue
    } else if (Array.isArray(content)) {
     TextNode(node, ...content)
     continue
    } else {
     propertiesProcessing(content, (propertyName, propertyValue) =>
      textPropertyProcessing(node, propertyName, propertyValue))
    }
  }
 }

 if (effects.size > 0) {
  observeConnection({
   node,
   connectedCallback: nodeConnectedCallback,
   disconnectedCallback: nodeDisconnectedCallback
  })
 }

 return node

 function nodeConnectedCallback() {
  executeEffects(effects)
 }

 function nodeDisconnectedCallback() {
  disposeEffects(effects)
 }

 /**
  * @param {Text} node
  * @param {string} propertyName
  * @param {any} propertyValue
  */
 function textPropertyProcessing(node, propertyName, propertyValue) {
  switch (propertyName) {
   case nodeEffect_property:
    elementEffectProcessing(node, propertyValue, effects)
    return
   case connectedCallback_property:
    connectedCallbackProcessing(node, propertyValue)
    return
   case disconnectedCallback_property:
    disconnectedCallbackProcessing(node, propertyValue)
    return
   default:
    assignNodeProperty(node, propertyName, propertyValue, effects)
  }
 }
}