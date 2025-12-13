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

registraServiceWorker()

/** @type {HTMLInputElement} */
const abrir = querySelector(document, "#abrir")
/** @type {HTMLAnchorElement} */
const guardar = querySelector(document, "#guardar")
const ejecutar = querySelector(document, "#ejecutar")
const code = querySelector(document, "#code")
/** @type {HTMLInputElement} */
const codeShow = querySelector(document, "#codeShow")
/** @type {HTMLIFrameElement} */
const iframe = querySelector(document, "iframe")
/** @type {HTMLOutputElement} */
const windowTitle = querySelector(document, "#windowTitle")
/** @type {HTMLInputElement} */
const windowShow = querySelector(document, "#windowShow")
/** @type {HTMLInputElement} */
const consoleShow = querySelector(document, "#consoleShow")
const consoleSec = querySelector(document, "#consoleSec")
const consoleElement = querySelector(document, "pre")

const darkModePreference = matchMedia('(prefers-color-scheme: dark)')
darkModePreference.addEventListener("change", () => location.reload())

let texto = decodeURIComponent(location.hash.replace(/^\#/, ""))
if (texto.includes("&")) {
 const parts = texto.split("&")
 codeShow.checked = parts[0] === "1"
 windowShow.checked = parts[1] === "1"
 consoleShow.checked = parts[2] === "1"
 texto = parts[3] || ""
}

var editor = new EditorView({
 doc: texto,
 parent: code,
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
   if (update.docChanged) {
    contenidoCambia()
   }
  }),
  html(),
 ],
})

abrir.addEventListener("change", archivoAbre)
ejecutar.addEventListener("click", ejecuta)
codeShow.addEventListener("click", códigoActualiza)
ventanaSecActualiza()
windowShow.addEventListener("click", ventanaSecActualiza)
consolaSecActualiza()
consoleShow.addEventListener("click", consolaSecActualiza)

 codigoDisplay()
 ventanaDisplay()
 consolaDisplay()
 contenidoCambia()

if (!codeShow.checked && windowShow.checked && !consoleShow.checked) {
 ejecuta()
}


function códigoActualiza() {
 codigoDisplay()
 contenidoCambia()
}

function codigoDisplay() {
 code.style.display = codeShow.checked ? '' : 'none'
}

function ventanaSecActualiza() {
 ventanaDisplay()
 contenidoCambia()
}

function ventanaDisplay() {
 iframe.style.display = windowShow.checked ? '' : 'none'
}

function consolaSecActualiza() {
 consolaDisplay()
 contenidoCambia()
}

function consolaDisplay() {
 consoleSec.style.display = consoleShow.checked ? '' : 'none'
}

function ejecuta() {
 const src = editor.state.doc.toString().replace(
   /* html */`</title>`,
    /* html */ `</title><script src="adapta.js"></script>`
 )

 iframe.srcdoc = src
}

function archivoAbre() {
 const selección = fileSeleccionado()
 if (selección) {
  const reader = new FileReader()
  reader.onload = () => {
   if (typeof reader.result === "string" && editor && guardar) {
    guardar.download = selección.name

    setEditorContent(reader.result)
    guardarActualiza(reader.result)
   }
  }
  reader.onerror = () => {
   if (reader.error) {
    errorMuestra(reader.error)
   }
  }
  reader.readAsText(selección)
 }
}

function fileSeleccionado() {
 return abrir && abrir.files && abrir.files[0]
}

/**
 * @template {HTMLElement} T
 * @param {HTMLElement | Document | ShadowRoot} parent
 * @param {string} selector
 * @returns {T}
 */
function querySelector(parent, selector) {
 const element = parent.querySelector(selector)
 if (!element) throw new Error(selector + " not found.")
 // @ts-ignore
 return element
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
function contenidoCambia() {
 const texto = encodeURIComponent(editor.state.doc.toString())
 const s = codeShow.checked ? "1" : "0"
 const w = windowShow.checked ? "1" : "0"
 const c = consoleShow.checked ? "1" : "0"
 location.hash = `${s}&${w}&${c}&${texto}`
 guardarActualiza(texto)
}

/**
 * @param {string} texto
 */
function guardarActualiza(texto) {
  guardar.href =
   URL.createObjectURL(new Blob([texto], { type: "text/html" }))
}

/** @param {DOMException} e */
function errorMuestra(e) {
 console.log(e)
 alert(e.message)
}

async function registraServiceWorker() {
 try {
  if (navigator.serviceWorker) {
   const registro = await navigator.serviceWorker.register(
    new URL('sw.js', import.meta.url),
    { type: 'module' }
   )
   console.log("Service Worker registrado.")
   console.log(registro)
  }
 } catch (e) {
  errorMuestra(e)
 }
}

onmessage = evt => {
 const { op, args } = evt.data
 switch (op) {
  case "clear":
   consoleElement.textContent = ""
   break
  case "log": {
   const div = document.createElement("div")
   div.textContent = (args || []).join(" ")
   consoleElement.append(div)
  }
   break
  case "error": {
   const div = document.createElement("div")
   div.classList.add("error")
   div.textContent = (args || []).join(" ")
   consoleElement.append(div)
  }
   break
  case "title": {
   const title = (args || [])[0]
   document.title = title + " | GilPG Edit"
   windowTitle.value = title
  }
   break
 }
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

window.addEventListener('unhandledrejection', event => {
 console.error(event)
})
