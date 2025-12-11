{
 const cl = console.clear
 const lo = console.log
 const err = console.error
 const top = window.top
 if (top) {
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
 window.onerror = function (event, _src, línea, col, error) {
  console.error(`[línea: ${línea}, columna: ${col}] `)
  console.error(event)
  console.error(error)
 }
 window.addEventListener('unhandledrejection', event => {
  console.error(event)
 })
}