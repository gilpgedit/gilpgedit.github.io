import {
 attributeChangedCallback_property
} from "../const/attributeChangedCallback_property.js"
import { attributeNames_property } from "../const/attributeNames_property.js"
import { className_property } from "../const/className_property.js"
import {
 connectedCallback_property
} from "../const/connectedCallback_property.js"
import { dataset_property } from "../const/dataset_property.js"
import {
 disconnectedCallback_property
} from "../const/disconnectedCallback_property.js"
import { DO_NOTHING_FUNCTION } from "../const/DO_NOTHING_FUNCTION.js"
import { eventListeners_property } from "../const/eventListeners_property.js"
import { innerHTML_property } from "../const/innerHTML_property.js"
import { liteNode_property } from "../const/liteNode_property.js"
import { nodeEffect_property } from "../const/nodeEffect_property.js"
import {
 observeAttributes_property
} from "../const/observeAttributes_property.js"
import { outerHTML_property } from "../const/outerHTML_property.js"
import { style_property } from "../const/style_property.js"
import {
 tiltleAndAccessKey_property
} from "../const/tiltleAndAccessKey_property.js"
import { mapNew } from "../di/mapNew.js"
import { observeAttributes } from "../html/observeAttributes.js"
import { observeConnection } from "../html/observeConnection.js"
import { setTiltleAndAccessKey } from "../html/setTiltleAndAccessKey.js"
import {
 arrayElementNotArrayTemplate
} from "../i18n/template/arrayElementNotArrayTemplate.js"
import {
 eventListenerListenerPositionInvalidTemplate
} from "../i18n/template/eventListenerListenerPositionInvalidTemplate.js"
import {
 eventListenerTypePositionInvalidTemplate
} from "../i18n/template/eventListenerTypePositionInvalidTemplate.js"
import {
 functionPropertyInvalidTemplate
} from "../i18n/template/functionPropertyInvalidTemplate.js"
import {
 htmlValueInvalidTemplate
} from "../i18n/template/htmlValueInvalidTemplate.js"
import {
 propertyFunctionInvalidTemplate
} from "../i18n/template/propertyFunctionInvalidTemplate.js"
import {
 propertyNotArrayInvalidTemplate
} from "../i18n/template/propertyNotArrayInvalidTemplate.js"
import {
 propertyNotArrayTemplate
} from "../i18n/template/propertyNotArrayTemplate.js"
import {
 stringArrayPositionInvalidTemplate
} from "../i18n/template/stringArrayPositionInvalidTemplate.js"
import {
 stringDefinitionValueInvalidTemplate
} from "../i18n/template/stringDefinitionValueInvalidTemplate.js"
import { Signal } from "../Signal/Signal.js"
import { TextNode } from "./TextNode.js"
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

const ON = "on"
const ON_LENGTH = ON.length

/**
 * @template {HTMLElement} ElementType
 * @template {import("./parameter/LiteElementProperties.js").
 *                           LiteElementProperties<ElementType>} AttributesType
 * @param {ElementType} node
 * @param {import("./parameter/LiteElementParameter.js").
 *                LiteElementParameter<ElementType, AttributesType>[]} contents
 * @returns {ElementType}
 */
export function _(node, ...contents) {

 /**
  * @type {[string, EventListenerOrEventListenerObject,
  *                                     AddEventListenerOptions | undefined][]}
  */
 const eventListeners = []

 /**
  * @type {Map<() => any, any>}
  */
 const effects = mapNew()

 for (let i = 0, length = contents.length; i < length; i++) {
  const content = contents[i]
  switch (typeof content) {
   case "undefined":
    continue
   case "string":
    node.append(content)
    continue
   case "number":
    node.append(content.toString())
    continue
   case "function":
    content.call(node)
    continue
   default:
    if (content === null) {
     continue
    } else if (Array.isArray(content)) {
     _(node, ...content)
     continue
    } else if (content instanceof Node) {
     node.append(content)
     continue
    } else if (content instanceof Signal) {
     node.append(TextNode({ data: content }))
     continue
    } else {
     const liteNodeValue = content[liteNode_property]
     if (liteNodeValue instanceof Node) {
      node.append(liteNodeValue)
      continue
     } else {
      propertiesProcessing(content, (propertyName, propertyValue) =>
       elementPropertyProcessing(node, propertyName, propertyValue))
     }
    }
  }
 }

 if (eventListeners.length > 0 || effects.size > 0) {
  observeConnection({
   node,
   connectedCallback: nodeConnectedCallback,
   disconnectedCallback: nodeDisconnectedCallback
  })
 }

 return node

 /**
  * @this {ElementType}
  */
 function nodeConnectedCallback() {

  for (let e = 0, eLen = eventListeners.length; e < eLen; e++) {
   const [type, listener, options] = eventListeners[e]
   if (options) {
    node.addEventListener(type, listener, options)
   } else {
    node.addEventListener(type, listener)
   }
  }

  executeEffects(effects)

 }

 /**
  * @this {ElementType}
  */
 function nodeDisconnectedCallback() {

  for (let e = 0, eLen = eventListeners.length; e < eLen; e++) {
   const [type, listener, options] = eventListeners[e]
   if (options) {
    node.removeEventListener(type, listener, options)
   } else {
    node.removeEventListener(type, listener)
   }
  }

  disposeEffects(effects)

 }

 /**
  * @param {ElementType} node
  * @param {string} propertyName
  * @param {any} propertyValue
  */
 function elementPropertyProcessing(node, propertyName, propertyValue) {
  switch (propertyName) {
   case className_property:
    classNamesProcessing(node, propertyValue)
    return
   case style_property:
    stringDefinitionsProcessing(style_property, propertyValue)
    return
   case dataset_property:
    stringDefinitionsProcessing(dataset_property, propertyValue)
    return
   case nodeEffect_property:
    elementEffectProcessing(node, propertyValue, effects)
    return
   case connectedCallback_property:
    connectedCallbackProcessing(node, propertyValue)
    return
   case disconnectedCallback_property:
    disconnectedCallbackProcessing(node, propertyValue)
    return
   case observeAttributes_property:
    observeAttributesProcessing(node, observeAttributes_property, propertyValue)
    return
   case eventListeners_property:
    eventListenersProcessing(eventListeners_property, propertyValue)
    return
   case innerHTML_property:
   case outerHTML_property:
    htmlProcessing(node, propertyName, propertyValue)
    return
   case tiltleAndAccessKey_property:
    tiltleAndAccessKeyProcessing(propertyName, propertyValue)
    return
   default:
    if (propertyName.length > ON_LENGTH && propertyName.startsWith(ON)) {
     onEventListenersProcessing(propertyName, propertyValue)
    } else {
     assignNodeProperty(node, propertyName, propertyValue, effects)
    }
  }
 }

 /**
  * @param {ElementType} node
  * @param {any} definitions
  */
 function classNamesProcessing(node, definitions) {
  for (let definitioEntries = Object.entries(definitions), d = 0
   , dLen = definitioEntries.length; d < dLen; d++) {
   const [definitionName, definitionValue] = definitioEntries[d]
   classNameProcessing(node, definitionName, definitionValue)
  }
 }

 /**
  * @param {ElementType} node
  * @param {string} definitionName
  * @param {any} definitionValue
  */
 function classNameProcessing(node, definitionName, definitionValue) {
  if (definitionValue instanceof Signal) {
   effects.set(
    () => node.classList.toggle(definitionName, !!definitionValue.get()),
    DO_NOTHING_FUNCTION)
  } else {
   node.classList.toggle(definitionName, !!definitionValue)
  }
 }

 /**
  * @param {string} source
  * @param {any} tiltleAndAccessKey
  */
 function tiltleAndAccessKeyProcessing(source, tiltleAndAccessKey) {

  if (!Array.isArray(tiltleAndAccessKey))
   throw new Error(propertyNotArrayTemplate(source))


  let title = tiltleAndAccessKey[0]
  if (typeof title !== "string" && !(title instanceof Signal))
   throw new Error(stringArrayPositionInvalidTemplate(source, 0))

  const accessKey = tiltleAndAccessKey[1]
  if (typeof accessKey !== "string" && !(accessKey instanceof Signal))
   throw new Error(stringArrayPositionInvalidTemplate(source, 1))

  if (typeof title === "string" && typeof accessKey === "string") {
   setTiltleAndAccessKey(node, title, accessKey)
  } else if (typeof title === "string" && accessKey instanceof Signal) {
   effects.set(() => {
    const accessKeyValue = accessKey.get()
    setTiltleAndAccessKey(node, title, accessKeyValue)
   },
    DO_NOTHING_FUNCTION)
  } else if (title instanceof Signal && typeof accessKey === "string") {
   effects.set(() => {
    const titleValue = title.get()
    setTiltleAndAccessKey(node, titleValue, accessKey)
   },
    DO_NOTHING_FUNCTION)
  } else if (title instanceof Signal && accessKey instanceof Signal) {
   effects.set(() => {
    const titleValue = title.get()
    const accessKeyValue = accessKey.get()
    setTiltleAndAccessKey(node, titleValue, accessKeyValue)
   },
    DO_NOTHING_FUNCTION)
  }
 }

 /**
  * @param {string} source
  * @param {any} eventListenerList
  */
 function eventListenersProcessing(source, eventListenerList) {

  if (!Array.isArray(eventListenerList))
   throw new Error(propertyNotArrayTemplate(source))

  for (let i = 0, len = eventListenerList.length; i < len; i++) {
   const definition = eventListenerList[i]

   if (!Array.isArray(definition))
    throw new Error(arrayElementNotArrayTemplate(source, i))

   let type = definition[0]
   if (typeof type !== "string")
    throw new Error(eventListenerTypePositionInvalidTemplate(source, i))

   const listener = definition[1]
   if (typeof listener !== "function")
    throw new Error(eventListenerListenerPositionInvalidTemplate(source, i))

   const options = definition[2]

   eventListeners.push([type, listener, options])

  }

 }

 /**
  * @param {string} onEvent
  * @param {any} eventListener
  */
 function onEventListenersProcessing(onEvent, eventListener) {
  const type = onEvent.substring(ON_LENGTH)
  if (typeof eventListener !== "function")
   throw new Error(functionPropertyInvalidTemplate(onEvent))
  eventListeners.push([type, eventListener, undefined])
 }

 /**
  * @param {string} source
  * @param {any} definitions
  */
 function stringDefinitionsProcessing(source, definitions) {
  for (let definitioEntries = Object.entries(definitions), d = 0
   , dLen = definitioEntries.length; d < dLen; d++) {
   const [definitionName, definitionValue] = definitioEntries[d]
   stringDefinitionProcessing(source, definitionName, definitionValue)
  }
 }

 /**
  * @param {string} source
  * @param {string} definitionName
  * @param {any} definitionValue
  */
 function stringDefinitionProcessing(source, definitionName
  , definitionValue) {
  if (typeof definitionValue === "string") {
   node[source][definitionName] = definitionValue
  } else if (definitionValue instanceof Signal) {
   effects.set(() => node[source][definitionName] = definitionValue.get(),
    DO_NOTHING_FUNCTION)
  } else {
   throw new Error(stringDefinitionValueInvalidTemplate(source, definitionName))
  }
 }

 /**
  * @param {ElementType} node
  * @param {string} source
  * @param {any} definitionValue
  */
 function htmlProcessing(node, source, definitionValue) {
  if (typeof definitionValue === "string") {
   node[source] = definitionValue
  } else if (definitionValue instanceof Signal) {
   effects.set(() => htmlProcessing(node, source, definitionValue.get()),
    DO_NOTHING_FUNCTION)
  } else {
   const innerHTML = definitionValue[innerHTML_property]
   if (typeof innerHTML !== "string")
    throw new Error(htmlValueInvalidTemplate(source))
   node[source] = innerHTML
  }
 }

}

/**
 * @template {HTMLElement} ElementType
 * @param {ElementType} node
 * @param {string} source
 * @param {any} definitions
 */
function observeAttributesProcessing(node, source, definitions) {
 const attributeNamesValue = definitions[attributeNames_property]
 if (!Array.isArray(attributeNamesValue))
  throw new Error(propertyNotArrayInvalidTemplate(source,
   attributeNames_property))
 const onAttributeChanged = definitions[attributeChangedCallback_property]
 if (typeof onAttributeChanged === "function")
  throw new Error(propertyFunctionInvalidTemplate(source,
   attributeChangedCallback_property))
 observeAttributes(node, attributeNamesValue, onAttributeChanged)
}