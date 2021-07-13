let editor = null;
const código = document.querySelector("#codemirror");
const iframe = document.querySelector("iframe");
const ejecutar = document.querySelector("button");
/** @type {HTMLInputElement|null} */
const chkVentana = document.querySelector("#chkVentana");
/** @type {HTMLInputElement|null} */
const chkConsola = document.querySelector("#chkConsola");
/** @type {HTMLInputElement|null} */
const abrir = document.querySelector("#abrir");
/** @type {HTMLAnchorElement|null} */
const guardar = document.querySelector("#guardar");
/** @type {HTMLElement|null} */
const secVentana = document.querySelector("#secVentana");
/** @type {HTMLElement|null} */
const secConsola = document.querySelector("#secConsola");
/** @type {HTMLElement|null} */
const título = document.querySelector("#título");

if (abrir) {
  abrir.addEventListener("change", abreArchivo);
}

if (ejecutar) {
  ejecutar.addEventListener("click", timeout);
}

if (chkVentana) {
  actualizaSecVentana();
  chkVentana.addEventListener("click", actualizaSecVentana);
}

if (chkConsola) {
  actualizaSecConsola();
  chkConsola.addEventListener("click", actualizaSecConsola);
}

if (código) {
  // @ts-ignore
  editor = CodeMirror(código, {
    mode: "text/html",
    extraKeys: { "Ctrl-Space": "autocomplete" },
    tabSize: 2,
    lineNumbers: true
  });
  const texto = decodeURIComponent(location.hash.replace(/^\#/, ""));
  editor.setValue(texto);
  configuraGuardar(texto);
  editor.on("change", contenidoCambia);
}

function actualizaSecConsola() {
  if (chkConsola && secConsola) {
    secConsola.style.display = chkConsola.checked ? '' : 'none';
  }
}

function actualizaSecVentana() {
  if (chkVentana && secVentana) {
    secVentana.style.display = chkVentana.checked ? '' : 'none';
  }
}

function timeout() {
  setTimeout(ejecuta, 100);
}

function ejecuta() {
  if (iframe && código) {
    const src =
      chkConsola && chkConsola.checked ? adaptaCódigo() : editor.getValue();
    iframe.srcdoc = src;
    // setTimeout(() => {
    //   if (título && iframe.contentDocument && iframe.contentDocument.title) {
    //     título.textContent = iframe.contentDocument.title;
    //   }
    // }, 1000);
  }
}

function abreArchivo() {
  const selección = fileSeleccionado();
  if (selección) {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string" && editor && guardar) {
        guardar.download = selección.name;
        editor.setValue(reader.result);
        configuraGuardar(reader.result);
      }
    }
    reader.onerror = () => muestraError(reader.error);
    reader.readAsText(selección);
  }
}

function fileSeleccionado() {
  return abrir && abrir.files && abrir.files[0];
}

function contenidoCambia() {
  const texto = editor.getValue();
  location.hash = encodeURIComponent(texto)
  configuraGuardar(texto);
}

/** @param {string} texto */
function configuraGuardar(texto) {
  if (guardar) {
    guardar.href =
      URL.createObjectURL(new Blob([texto], { type: "text/html" }));
  }
}

function muestraError(e) {
  console.log(e);
  alert(e.message);
}

function adaptaCódigo() {
  if (editor) {
    const src = editor.getValue();
    return src.replace("<script", /* html */ `<script src="adapta.js"></script><script`);
  } else {
    return "";
  }
}