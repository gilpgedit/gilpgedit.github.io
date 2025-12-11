import {EditorView, keymap} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"

// registraServiceWorker()

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

let editor = new EditorView({
  doc: "hello",
  extensions: [keymap.of(defaultKeymap)],
  parent: code,
});

// if (window.matchMedia) {
//  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   // @ts-ignore
//   editor = CodeMirror(code, {
//    mode: "text/html",
//    theme: "cobalt",
//    extraKeys: { "Ctrl-Space": "autocomplete" },
//    tabSize: 1,
//    lineNumbers: true
//   })
//  } else {
//   // @ts-ignore
//   editor = CodeMirror(code, {
//    mode: "text/html",
//    extraKeys: { "Ctrl-Space": "autocomplete" },
//    tabSize: 1,
//    lineNumbers: true
//   })
//  }
// } else {
//  // @ts-ignore
//  editor = CodeMirror(code, {
//   mode: "text/html",
//   extraKeys: { "Ctrl-Space": "autocomplete" },
//   tabSize: 1,
//   lineNumbers: true
//  })
// }


abrir.addEventListener("change", archivoAbre)
ejecutar.addEventListener("click", timeout)
códigoActualiza()
codeShow.addEventListener("click", códigoActualiza)
ventanaSecActualiza()
windowShow.addEventListener("click", ventanaSecActualiza)
consolaSecActualiza()
consoleShow.addEventListener("click", consolaSecActualiza)

const texto = decodeURIComponent(location.hash.replace(/^\#/, ""))
// editor.setValue(texto)
guardarActualiza(texto)
// editor.on("change", contenidoCambia)

function códigoActualiza() {
 code.style.display = codeShow.checked ? '' : 'none'
}

function ventanaSecActualiza() {
 iframe.style.display = windowShow.checked ? '' : 'none'
}

function consolaSecActualiza() {
 consoleSec.style.display = consoleShow.checked ? '' : 'none'
}

function timeout() {
 setTimeout(ejecuta, 100)
}

function ejecuta() {
 // @ts-ignore
 const src = editor.getValue().replace(
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
   // @ts-ignore
   if (typeof reader.result === "string" && editor && guardar) {
    guardar.download = selección.name
    // editor.setValue(reader.result)
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
function contenidoCambia() {
 // @ts-ignore
 const texto = editor.getValue()
 location.hash = encodeURIComponent(texto)
 guardarActualiza(texto)
}

/** @param {string} texto */
function guardarActualiza(texto) {
 if (guardar) {
  guardar.href =
   URL.createObjectURL(new Blob([texto], { type: "text/html" }))
 }
}

/** @param {DOMException} e */
function errorMuestra(e) {
 console.log(e)
 alert(e.message)
}

// async function registraServiceWorker() {
//  try {
//   if (navigator.serviceWorker) {
//    const registro = await navigator.serviceWorker.register("sw.js");
//    console.log("Service Worker registrado.");
//    console.log(registro);
//   }
//  } catch (e) {
//   errorMuestra(e);
//  }
// }

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