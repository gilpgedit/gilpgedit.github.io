import {
 autocompletion,
 closeBrackets,
 closeBracketsKeymap,
 completionKeymap
} from "@codemirror/autocomplete"
import {
 defaultKeymap, history, historyKeymap,
 indentWithTab
} from "@codemirror/commands"
import { html } from "@codemirror/lang-html"
import {
 bracketMatching,
 defaultHighlightStyle,
 foldGutter, foldKeymap,
 indentOnInput,
 indentUnit,
 syntaxHighlighting
} from "@codemirror/language"
import { lintKeymap } from "@codemirror/lint"
import {
 highlightSelectionMatches,
 searchKeymap
} from "@codemirror/search"
import { EditorState } from "@codemirror/state"
import {
 crosshairCursor,
 dropCursor,
 EditorView,
 highlightActiveLine,
 highlightActiveLineGutter,
 highlightSpecialChars,
 keymap,
 lineNumbers,
 rectangularSelection
} from "@codemirror/view"
import { gruvboxDark } from "cm6-theme-gruvbox-dark"
import { gruvboxLight } from "cm6-theme-gruvbox-light"
// @ts-ignore
import adaptText from 'bundle-text:./adapt.js'
import { provideAsyncErrorProcessor } from "/gilpgcore/asyncErrorProcessor.js"
import { asyncTryCatch } from "/gilpgcore/asyncTryCatch.js"
import { provideErrorDisplay } from "/gilpgcore/errorDisplay.js"
import { provideErrorProcessor } from "/gilpgcore/errorProcessor.js"
import { tryCatch } from "/gilpgcore/tryCatch.js"
import {
 asyncErrorProcessorForBasicHtml
} from "/gilpghtml/asyncErrorProcessorForBasicHtml.js"
import {
 errorProcessorForBasicHtml
} from "/gilpghtml/errorProcessorForBasicHtml.js"
import { querySelector } from "/gilpghtml/querySelector.js"
import { readFileAsText } from "/gilpghtml/readFileAsText.js"
import { selectedFiles } from "/gilpghtml/selectedFiles.js"
import { serviceWorkerRegister } from "/gilpghtml/serviceWorkerRegister.js"

tryCatch(
 () => {

  provideErrorDisplay(alert)
  provideErrorProcessor(errorProcessorForBasicHtml)
  provideAsyncErrorProcessor(asyncErrorProcessorForBasicHtml)

  serviceWorkerRegister(
   navigator.serviceWorker.register(new URL('./sw.js', import.meta.url), { type: 'module', scope: '/' })
  )

  /**
   * @type {HTMLInputElement}
   */
  const openElement = querySelector(document, "#abrir")
  /**
   * @type {HTMLAnchorElement}
   */
  const saveElement = querySelector(document, "#guardar")
  const executeElement = querySelector(document, "#ejecutar")
  const codeElement = querySelector(document, "#code")
  /**
   * @type {HTMLInputElement}
   */
  const codeShowElement = querySelector(document, "#codeShow")
  /**
   * @type {HTMLIFrameElement}
   */
  const iframeElement = querySelector(document, "iframe")
  /**
   * @type {HTMLOutputElement}
   */
  const windowTitleElement = querySelector(document, "#windowTitle")
  /**
   * @type {HTMLInputElement}
   */
  const windowShowElement = querySelector(document, "#windowShow")
  /** @type {HTMLInputElement} */
  const consoleShowElement = querySelector(document, "#consoleShow")
  const consoleSecElement = querySelector(document, "#consoleSec")
  const consolePreElement = querySelector(document, "pre")

  const darkModePreference = matchMedia('(prefers-color-scheme: dark)')
  darkModePreference.addEventListener("change", () => location.reload())

  let text = decodeURIComponent(location.hash.replace(/^\#/, ""))
  if (text.includes("&")) {
   const parts = text.split("&")
   codeShowElement.checked = parts[0] === "1"
   windowShowElement.checked = parts[1] === "1"
   consoleShowElement.checked = parts[2] === "1"
   text = parts[3] || ""
  }

  var editor = new EditorView({
   doc: text,
   parent: codeElement,
   extensions: [
    darkModePreference.matches ? gruvboxDark : gruvboxLight,
    // A line number gutter
    lineNumbers(),
    // A gutter with code folding markers
    foldGutter(),
    EditorState.tabSize.of(1),
    // Sets the string used for indentation to 2 spaces
    indentUnit.of(" "),

    // Replace non-printable characters with placeholders
    highlightSpecialChars(),
    // The undo history
    history(),
    // Show a drop cursor when dragging over the editor
    dropCursor(),
    // Allow multiple cursors/selections
    EditorState.allowMultipleSelections.of(true),
    // Re-indent lines when typing specific input
    indentOnInput(),
    // Highlight syntax with a default style
    syntaxHighlighting(defaultHighlightStyle),
    // Highlight matching brackets near cursor
    bracketMatching(),
    // Automatically close brackets
    closeBrackets(),
    // Load the autocompletion system
    autocompletion(),
    // Allow alt-drag to select rectangular regions
    rectangularSelection(),
    // Change the cursor to a crosshair when holding alt
    crosshairCursor(),
    // Style the current line specially
    highlightActiveLine(),
    // Style the gutter for current line specially
    highlightActiveLineGutter(),
    // Highlight text that matches the selected text
    highlightSelectionMatches(),
    keymap.of([
     indentWithTab,
     // Closed-brackets aware backspace
     ...closeBracketsKeymap,
     // A large set of basic bindings
     ...defaultKeymap,
     // Search-related keys
     ...searchKeymap,
     // Redo/undo keys
     ...historyKeymap,
     // Code folding bindings
     ...foldKeymap,
     // Autocompletion keys
     ...completionKeymap,
     // Keys related to the linter system
     ...lintKeymap
    ]),
    EditorView.updateListener.of(update => {
     tryCatch(() => {
      if (update.docChanged) {
       stateChanges()
      }
     },
      undefined)
    }),
    html(),
   ],
  })

  openElement.addEventListener("change", fileOpen)
  executeElement.addEventListener("click", ejecute)
  codeShowUpdate()
  codeShowElement.addEventListener("click", codeShowUpdate)
  windowShowUpdate()
  windowShowElement.addEventListener("click", windowShowUpdate)
  consoleShowUpdate()
  consoleShowElement.addEventListener("click", consoleShowUpdate)

  codeDisplay()
  windowDisplay()
  consoleDisplay()
  stateChanges()

  if (
   !codeShowElement.checked
   && windowShowElement.checked
   && !consoleShowElement.checked
  ) {
   ejecute()
  }

  function fileOpen() {
   asyncTryCatch(
    async () => {
     const files = selectedFiles(openElement)
     if (files.length > 0) {
      const file = files[0]
      const text = await readFileAsText(file)
      saveElement.download = file.name
      setEditorContent(text)
      saveHrefUpdate(text)
     }
    },
    undefined
   )
  }

  function ejecute() {
   tryCatch(
    () => {
     const src = editor.state.doc.toString().replace(
   /* html */`</title>`,
    /* html */ `</title><script>${adaptText}</script>`
     )

     iframeElement.srcdoc = src
    },
    undefined
   )
  }

  function codeShowUpdate() {
   tryCatch(
    () => {
     codeDisplay()
     stateChanges()
    },
    undefined
   )
  }

  function codeDisplay() {
   codeElement.hidden = !codeShowElement.checked
  }

  function windowShowUpdate() {
   tryCatch(
    () => {
     windowDisplay()
     stateChanges()
    },
    undefined
   )
  }

  function windowDisplay() {
   iframeElement.hidden = !windowShowElement.checked
  }

  function consoleShowUpdate() {
   tryCatch(
    () => {
     consoleDisplay()
     stateChanges()
    },
    undefined
   )
  }

  function consoleDisplay() {
   consoleSecElement.hidden = !consoleShowElement.checked
  }

  /**
   * @param {string} newContent
   */
  function setEditorContent(newContent) {
   editor.dispatch({
    changes: {
     from: 0,
     to: editor.state.doc.length, // Reemplaza todo el contenido existente
     insert: newContent // Inserta el nuevo contenido
    }
   })
  }

  function stateChanges() {
   const text = encodeURIComponent(editor.state.doc.toString())
   const s = codeShowElement.checked ? "1" : "0"
   const w = windowShowElement.checked ? "1" : "0"
   const c = consoleShowElement.checked ? "1" : "0"
   location.hash = `${s}&${w}&${c}&${text}`
   saveHrefUpdate(text)
  }

  /**
   * @param {string} text
   */
  function saveHrefUpdate(text) {
   saveElement.href =
    URL.createObjectURL(new Blob([text], { type: "text/html" }))
  }

  const SOURCE_ID = 'v-console-msg'
  let groupLevel = 0

  window.onmessage =
   (/** @type {MessageEvent<{
     source: string,
     method:string,
     args: any[],
     type:string,
    }>} */ event) => {
    if (event.data?.source === SOURCE_ID) {
     const { method, args, type } = event.data
     processMessage(method, args, type)
    }
   }

  /**
   * @param {string} method
   * @param {any[]} args
   * @param {string} type
   */
  function processMessage(method, args, type) {
   switch (method) {
    case 'clear':
     consolePreElement.textContent = ''
     groupLevel = 0
     break
    case 'group':
     render(`▼ ${args[0] || 'Grupo'}`, 'log')
     groupLevel++
     break
    case 'groupEnd':
     if (groupLevel > 0) groupLevel--
     break
    case "title": {
     const title = (args || [])[0]
     document.title = title + " | GilPG Edit"
     windowTitleElement.value = title
    }
    default:
     args.forEach(arg => render(arg, type || 'log'))
   }
  }

  function render(message, type) {
   const line = document.createElement('div')
   line.className = `log-line type-${type}`

   const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
   const indent = "  ".repeat(this.groupLevel)

   let content = (message instanceof Error) ? `${message.stack}` :
    (typeof message === 'object') ? JSON.stringify(message, null, 2) : message

   line.innerHTML = `<span class="timestamp">${time}</span>${indent}${content}`
   this.output.appendChild(line)
   this.output.scrollTop = this.output.scrollHeight
  }

  window.onerror = function (
  /** @type { Event | string} */ event,
  /** @type {string} */ _src,
  /** @type {number} */ línea,
  /** @type {number} */ col,
  /** @type {Error} */ error
  ) {
   console.error(`[línea: ${línea}, columna: ${col}] `)
   console.error(event)
   console.error(error)
  }

  window.addEventListener('unhandledrejection', event => console.error(event))

 },
 undefined
)