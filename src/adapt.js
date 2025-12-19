{
 const top = window.top
 if (top) {
  const SOURCE_ID = 'v-console-msg'
  let counters = new Map()
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
   print('clear')
  }
  window.console.log = function (...args) {
   log(...args)
   print('log', args, 'log')
  }
  window.console.info = function (...args) {
   info(...args)
   print('info', args, 'info')
  }
  window.console.warn = function (...args) {
   warn(...args)
   print('warn', args, 'warn')
  }
  window.console.error = function (...args) {
   error(...args)
   print('error', args, 'error')
  }
  window.console.debug = function (...args) {
   debug(...args)
   print('debug', args, 'debug')
  }
  window.console.assert = function (condition, ...args) {
   assert(condition, ...args)
   if (!condition) print('log', [`Assertion failed: ${args.join(' ')}`], 'error')
  }
  window.console.count = function (label = 'default') {
   count(label)
   counters.set(label, (counters.get(label) || 0) + 1)
   print('log', [`${label}: ${counters.get(label)}`], 'log')
  }
  window.console.countReset = function (label = 'default') {
   countReset(label)
   if (counters.get(label)) {
    counters.set(label, 0)
    print('log', [`${label}: ${counters.get(label)}`], 'log')
   } else {
    print("warn", `Count for '${label}' does not exist`, "warn")
   }
  }
  window.console.time = function (label = 'default') {
   time(label)
   timers.set(label, performance.now())
  }
  window.console.timeLog = function (label = 'default', ...args) {
   timeLog(label)
   const timerValue = timers.get(label)
   if (timerValue) {
    const delta = performance.now() - timerValue.toFixed(3)
    print('log', `${label}: ${delta}ms`, ...args)
   }
  }
  window.console.timeEnd = function (label = 'default') {
   timeEnd(label)
   const timerValue = timers.get(label)
   if (timerValue) {
    const delta = (performance.now() - timerValue).toFixed(3)
    print('log', [`${label}: ${delta}ms`], 'log')
    timers.delete(label)
   } else {
    print('warn', `Timer '${label}' does not exist`, 'warn')
   }
  }
  window.console.group = function (label) {
   group(label)
   print('group', [label])
  }
  window.console.groupCollapsed = function (label) {
   groupCollapsed(label)
   print('groupCollapsed', [label])
  }
  window.console.groupEnd = function () {
   groupEnd()
   print('groupEnd')
  }
  window.console.table = function (data, columns) {
   table(data, columns)
   if (Array.isArray(data)) {
    print("--- Table View ---", 'info')
    print('log', data, 'log')
   } else {
    print('log', data, 'log')
   }
  }
  window.console.dir = function (obj, options) {
   dir(obj, options)
   // En Node, dir muestra una lista interactiva. Aquí formateamos el objeto.
   print('log', ['[Object Directory]:', obj], 'log')
  }
  window.console.dirxml = function (...args) {
   dirxml(...args)
   // En navegador suele ser igual a log/dir para elementos XML/DOM
   print('log', args, 'log')
  }
  window.console.trace = function (...args) {
   trace(...args)
   const err = new Error()
   err.name = 'Trace'
   print('log', [...args, err.stack], 'log')
  }
  window.console.profile = function (label) {
   profile(label)
   print('info', `Profile '${label}' started (Check browser devtools)`, 'info')
  }
  window.console.profileEnd = function (label) {
   profileEnd(label)
   print('info', `Profile '${label}' finished`, 'info')
  }
  window.console.timeStamp = function (label) {
   timeStamp(label)
   print('info', `Timestamp: ${label}`, 'info')
  }
  const titleElement = document.querySelector('title')
  if (titleElement) {
   print('title', [document.title], '')
   const observer = new MutationObserver(() => print('title', [document.title], ''))
   const config = { childList: true }
   observer.observe(titleElement, config)
  }
  window.onerror = (message, _url, _line, _column, errorObject) => {
   error(errorObject)
   print('error', [message], 'error')
   return true
  }
  window.addEventListener('unhandledrejection', event => {
   const reason = event.reason
   if (reason) {
    error(reason)
    if (reason.message) {
     print('error', [reason.message], 'error')
    } else {
     print('error', [reason], 'error')
    }
   } else {
    error(event)
    print('error', [event], 'error')
   }
   event.preventDefault()
  })
  function print(method, args, type = 'log') {
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