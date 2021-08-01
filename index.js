registraServiceWorker();

let editor = null;
/** @type {HTMLInputElement|null} */
const abrir = document.querySelector("#abrir");
/** @type {HTMLAnchorElement|null} */
const guardar = document.querySelector("#guardar");
const ejecutar = document.querySelector("button");
/** @type {HTMLElement|null} */
const código = document.querySelector("#código");
/** @type {HTMLInputElement|null} */
const códigoMuestra = document.querySelector("#códigoMuestra");
const ventana = document.querySelector("iframe");
/** @type {HTMLElement|null} */
const ventanaTítulo = document.querySelector("#ventanaTítulo");
/** @type {HTMLElement|null} */
const ventanaSec = document.querySelector("#ventanaSec");
/** @type {HTMLInputElement|null} */
const ventanaMuestra = document.querySelector("#ventanaMuestra");
/** @type {HTMLInputElement|null} */
const consolaMuestra = document.querySelector("#consolaMuestra");
/** @type {HTMLElement|null} */
const consolaSec = document.querySelector("#consolaSec");

if (abrir) {
  abrir.addEventListener("change", archivoAbre);
}

if (ejecutar) {
  ejecutar.addEventListener("click", timeout);
}

if (códigoMuestra) {
  códigoActualiza();
  códigoMuestra.addEventListener("click", códigoActualiza);
}

if (ventanaMuestra) {
  ventanaSecActualiza();
  ventanaMuestra.addEventListener("click", ventanaSecActualiza);
}

if (consolaMuestra) {
  consolaSecActualiza();
  consolaMuestra.addEventListener("click", consolaSecActualiza);
}

if (código) {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // @ts-ignore
      editor = CodeMirror(código, {
        mode: "text/html",
        theme: "cobalt",
        extraKeys: { "Ctrl-Space": "autocomplete" },
        tabSize: 2,
        lineNumbers: true
      });
    } else {
      // @ts-ignore
      editor = CodeMirror(código, {
        mode: "text/html",
        extraKeys: { "Ctrl-Space": "autocomplete" },
        tabSize: 2,
        lineNumbers: true
      });
    }
  } else {
    // @ts-ignore
    editor = CodeMirror(código, {
      mode: "text/html",
      extraKeys: { "Ctrl-Space": "autocomplete" },
      tabSize: 2,
      lineNumbers: true
    });
  }
  const texto = decodeURIComponent(location.hash.replace(/^\#/, ""));
  editor.setValue(texto);
  guardarActualiza(texto);
  editor.on("change", contenidoCambia);
}

function códigoActualiza() {
  if (códigoMuestra && código) {
    código.style.display = códigoMuestra.checked ? '' : 'none';
  }
}

function ventanaSecActualiza() {
  if (ventanaMuestra && ventanaSec) {
    ventanaSec.style.display = ventanaMuestra.checked ? '' : 'none';
  }
}

function consolaSecActualiza() {
  if (consolaMuestra && consolaSec) {
    consolaSec.style.display = consolaMuestra.checked ? '' : 'none';
  }
}

function timeout() {
  setTimeout(ejecuta, 100);
}

function ejecuta() {
  if (ventana && código) {
    const src =
      consolaMuestra && consolaMuestra.checked ? códigoAdapta() : editor.getValue();
    ventana.srcdoc = src;
    // setTimeout(() => {
    //   if (título && iframe.contentDocument && iframe.contentDocument.title) {
    //     título.textContent = iframe.contentDocument.title;
    //   }
    // }, 1000);
  }
}

function archivoAbre() {
  const selección = fileSeleccionado();
  if (selección) {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string" && editor && guardar) {
        guardar.download = selección.name;
        editor.setValue(reader.result);
        guardarActualiza(reader.result);
      }
    }
    reader.onerror = () => {
      if (reader.error) {
        errorMuestra(reader.error);
      }
    };
    reader.readAsText(selección);
  }
}

function fileSeleccionado() {
  return abrir && abrir.files && abrir.files[0];
}

function contenidoCambia() {
  const texto = editor.getValue();
  location.hash = encodeURIComponent(texto)
  guardarActualiza(texto);
}

/** @param {string} texto */
function guardarActualiza(texto) {
  if (guardar) {
    guardar.href =
      URL.createObjectURL(new Blob([texto], { type: "text/html" }));
  }
}

/** @param {DOMException} e */
function errorMuestra(e) {
  console.log(e);
  alert(e.message);
}

async function registraServiceWorker() {
  try {
    if (navigator.serviceWorker) {
      const registro = await navigator.serviceWorker.register("sw.js");
      console.log("Service Worker registrado.");
      console.log(registro);
    }
  } catch (e) {
    errorMuestra(e);
  }
}

function códigoAdapta() {
  if (editor) {
    const src = editor.getValue();
    return src.replace("<script", /* html */ `<script src="adapta.js"></script><script`);
  } else {
    return "";
  }
}