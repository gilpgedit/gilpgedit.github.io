import { computedNew } from "../di/computedNew.js"
import { Watcher } from "../Signal/Watcher.js"

let needsEnqueue = true

const w = new Watcher(() => {
 if (needsEnqueue) {
  needsEnqueue = false
  queueMicrotask(processPending)
 }
})

function processPending() {
 needsEnqueue = true
 for (const s of w.getPending()) {
  s.get()
 }
 w.watch()
}

/**
 * @param {() => any} callback
 */
export function effect(callback) {

 let cleanup

 const computed = computedNew(() => {
  typeof cleanup === "function" && cleanup()
  cleanup = callback()
 })

 w.watch(computed)
 computed.get()

 return () => {
  w.unwatch(computed)
  typeof cleanup === "function" && cleanup()
  cleanup = undefined
 }

}