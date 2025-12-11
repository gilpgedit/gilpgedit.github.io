import { mutationObserverNew } from "../di/html/mutationObserverNew.js"
import { mapNew } from "../di/mapNew.js"


/**
 * @type {Map<Element, MutationObserver>}
 */
const observers = mapNew()

/**
 * @template {Element} ElementType
 * @param {ElementType} element
 * @param {string[]} attributeNames
 * @param {(
 *   node: ElementType,
 *   attributeName: string,
 *   oldValue: string | null,
 *   newValue: string | null
 *  ) => any} attributeChangedCallback
 */
export function observeAttributes(element, attributeNames
 , attributeChangedCallback) {

 const observer = mutationObserverNew(mutations => {
  for (let m = 0, mLen = mutations.length; m < mLen; m++) {
   const mutation = mutations[m]
   if (mutation.type === "attributes") {
    const target = mutation.target
    const attributeName = mutation.attributeName
    if (attributeName !== null && target === element) {
     attributeChangedCallback(element, attributeName, mutation.oldValue,
      element.getAttribute(attributeName))
    }
   }
  }
 })

 observer.observe(element,
  { attributeFilter: attributeNames, attributeOldValue: true })

 stopAttributeObservation(element)
 observers.set(element, observer)

}

/**
 * @param {Element} element
 */
export function stopAttributeObservation(element) {
 const observer = observers.get(element)
 if (observer) {
  observer.disconnect()
  observers.delete(element)
 }
}