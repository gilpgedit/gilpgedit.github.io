{
 const cl = console.clear
 const lo = console.log
 const err = console.error
 window.onerror = function (_evt, _src, línea, col, error) {
  console.error(`[línea: ${línea}, columna: ${col}] `)
  console.error(error)
 }
 const top = window.top
 if (top) {
  window.addEventListener('unhandledrejection', event => {
   top.postMessage({ op: "error", args: [event.reason] }, "*")
  })
  window.console.clear = function () {
   cl.apply(null, [])
   top.postMessage({ op: "clear", args: [] }, "*")
  }
  window.console.log = function (/** @type {any[]} */ ...args) {
   lo.apply(null, args)
   top.postMessage({ op: "log", args }, "*")
  }
  window.console.error = function (/** @type {any[]} */ ...args) {
   err.apply(null, args)
   top.postMessage({ op: "error", args }, "*")
  }
  const target = document.querySelector('title')
  if (target) {
   top.postMessage({ op: "title", args: [document.title || "-"] }, "*")
   const observer = new MutationObserver(() => {
    top.postMessage({ op: "title", args: [document.title || "-"] }, "*")
   })
   const config = { childList: true }
   observer.observe(target, config)
  }
 }
}