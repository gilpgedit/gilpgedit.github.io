{
 const top = window.top
 if (top) {
  const SOURCE_ID = 'v-console-msg'
  let counters = {}
  let timers = new Map()
  const clear = console.clear
  const log = console.log
  const info = console.info
  const warn = console.warn
  const error = console.error
  const debug = console.debug
  const assert = console.assert
  const count = console.count
  const countReset = console.countReset
  const time = console.time
  const timeLog = console.timeLog
  const timeEnd = console.timeEnd
  const group = console.group
  const groupCollapsed = console.groupCollapsed
  const groupEnd = console.groupEnd
  const table = console.table
  const dir = console.dir
  const dirxml = console.dirxml
  const trace = console.trace
  const profile = console.profile
  const profileEnd = console.profileEnd
  const timeStamp = console.timeStamp
  window.console.clear = function () {
   clear()
   send('clear')
  }
  window.console.log = function (...args) {
   log(...args)
   send('log', args, 'log')
  }
  window.console.info = function (...args) {
   info(...args)
   send('info', args, 'info')
  }
  window.console.warn = function (...args) {
   warn(...args)
   send('warn', args, 'warn')
  }
  window.console.error = function (...args) {
   error(...args)
   send('error', args, 'error')
  }
  window.console.debug = function (...args) {
   debug(...args)
   send('debug', args, 'debug')
  }
  window.console.assert = function (condition, ...args) {
   assert(condition, ...args)
   if (!condition) send('log', [`Assertion failed: ${args.join(' ')}`], 'error')
  }
  window.console.count = function (label = 'default') {
   count(label)
   counters[label] = (counters[label] || 0) + 1
   send('log', [`${label}: ${counters[label]}`], 'log')
  }
  window.console.countReset = function (label = 'default') {
   countReset(label)
   counters[label] = 0
   send('log', [`${label}: ${counters[label]}`], 'log')
  }
  window.console.time = function (label = 'default') {
   time(label)
   timers[label] = performance.now()
  }
  window.console.timeLog = function (label = 'default', ...args) {
   timeLog(label)
   if (timers[label]) {
    const delta = performance.now() - timers[label].toFixed(3)
    send('log', `${label}: ${delta}ms`, ...args)
   }
  }
  window.console.timeEnd = function (label = 'default') {
   timeEnd(label)
   if (timers[label]) {
    const delta = (performance.now() - timers[label]).toFixed(3)
    send('log', [`${label}: ${delta}ms`], 'log')
    delete timers[label]
  } else {
   send('warn', `Timer '${label}' does not exist`, 'warn')
   }
  }
  window.console.group = function (label) {
   group(label)
   send('group', [label])
  }
  window.console.groupCollapsed = function (label) {
   groupCollapsed(label)
   send('groupCollapsed', [label])
  }
  window.console.groupEnd = function () {
   groupEnd()
   send('groupEnd')
  }
  window.console.table = function (data, columns) {
   table(data, columns)
  if (Array.isArray(data)) {
   send("--- Table View ---", 'info')
   send('log', data, 'log')
  } else {
   send('log', data, 'log')
  }
  }
  window.console.dir = function (obj, options) {
   dir(obj, options)
   // En Node, dir muestra una lista interactiva. Aquí formateamos el objeto.
   send('log', ['[Object Directory]:', obj], 'log')
  }
  window.console.dirxml = function (...args) {
   dirxml(...args)
   // En navegador suele ser igual a log/dir para elementos XML/DOM
   send('log', args, 'log')
  }
  window.console.trace = function (...args) {
   trace(...args)
   const err = new Error()
   err.name = 'Trace'
   send('log', [...args.map(arg => String(arg), err.stack)], 'log')
  }
  window.console.profile = function (label) {
   profile(label)
   send('info', `Profile '${label}' started (Check browser devtools)`, 'info')
  }
  window.console.profileEnd = function (label) {
   profileEnd(label)
   send('info', `Profile '${label}' finished`, 'info')
  }
  window.console.timeStamp = function (label) {
   timeStamp(label)
   send('info', `Timestamp: ${label}`, 'info')
  }
  const titleElement = document.querySelector('title')
  if (titleElement) {
   send('title', [document.title], '')
   const observer = new MutationObserver(() => send('title', [document.title], ''))
   const config = { childList: true }
   observer.observe(titleElement, config)
  }
  window.onerror = (message, url, line, column, error) => {
   console.error(error || `${message} en ${url}:${line}: ${column}`)
  }
  window.addEventListener('unhandledrejection', event => {
   console.error("Promesa rechazada:", event.reason)
  })
  function send(method, args, type = 'log') {
   if (top) {
    top.postMessage(
     {
      source: SOURCE_ID,
      method,
      args,
      type
     },
     "*"
    )
   }
  }
 }
}