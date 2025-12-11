import { mutationObserverNew } from "../di/html/mutationObserverNew.js"
import { mapNew } from "../di/mapNew.js"
import { setNew } from "../di/setNew.js"

/**
 * @template {Node} NodeType
 * @typedef {{
 *   node: NodeType,
 *   connectedCallback?: (this: NodeType) => any;
 *   disconnectedCallback?: (this: NodeType) => any;
 *  }} ConnectionObserver
 */

/**
 * @type {Map<Node, Set<ConnectionObserver<Node>>>}
 */
const observers = mapNew()

const obsever = mutationObserverNew(mutations => {

 if (observers.size > 0) {

  for (let m = 0, mLen = mutations.length; m < mLen; m++) {
   const mutation = mutations[m]

   if (mutation.type === "childList") {
    callConnected(mutation.addedNodes)
    callDisconnected(mutation.removedNodes)
   }

  }


 }

})

obsever.observe(document.body, { subtree: true, childList: true })

/**
 * @template {Node} NodeType
 * @param {ConnectionObserver<NodeType>} observer
 */
export function observeConnection(observer) {
 let set = observers.get(observer.node)
 if (!set) {
  set = setNew()
  observers.set(observer.node, set)
 }
 set.add(observer)
}

/**
 * @param {Node} node
 */
export function stopConnectionObservation(node) {
 observers.delete(node)
}

/**
 * @param {NodeList} addedNodes
 */
function callConnected(addedNodes) {
 for (let a = 0, aLen = addedNodes.length; a < aLen; a++) {
  const node = addedNodes[a]
  const set = observers.get(node)
  if (set) {
   for (const observer of set) {
    const connectedCallback = observer.connectedCallback
    if (connectedCallback) {
     connectedCallback.call(node)
    }
   }
  }
  callConnected(node.childNodes)
 }
}

/**
 * @param {NodeList} removedNodes
 */
function callDisconnected(removedNodes) {
 for (let r = 0, rLen = removedNodes.length; r < rLen; r++) {
  const node = removedNodes[r]
  const set = observers.get(node)
  if (set) {
   for (const observer of set) {
    const disconnectedCallback = observer.disconnectedCallback
    if (disconnectedCallback) {
     disconnectedCallback.call(node)
    }
   }
   callDisconnected(node.childNodes)
  }
 }
}