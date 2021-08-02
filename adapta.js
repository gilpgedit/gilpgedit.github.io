const cl = console.clear;
const lo = console.log;
const err = console.error;
window.console.clear = (/** @type {any[]} */ ...parámetros) => {
  cl.apply(null, parámetros);
  const consola = window.parent.document.querySelector("#consola");
  if (consola) {
    consola.textContent = "";
  }
};
window.console.log = (/** @type {any[]} */ ...parámetros) => {
  lo.apply(null, parámetros);
  const consola = window.parent.document.querySelector("#consola");
  if (consola) {
    const div = document.createElement("div");
    div.textContent = parámetros.join(" ");
    consola.append(div);
  }
};
window.console.error = (/** @type {any[]} */ ...parámetros) => {
  const consola = window.parent.document.querySelector("#consola");
  if (consola) {
    err.apply(null, parámetros);
    const div = document.createElement("div");
    div.textContent = parámetros.join(" ");
    consola.append(div);
  }
};
