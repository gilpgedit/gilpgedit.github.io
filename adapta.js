const cl = console.clear;
const lo = console.log;
const err = console.error;
window.onerror = (evt, src, línea, col, error) => {
 console.error(`[línea: ${línea}, columna: ${col}] `);
 console.error(error);
};
window.console.clear =
 /** @param {any[]} parámetros */
 (...parámetros) => {
  cl.apply(null, parámetros);
  window.top.postMessage({ op: "clear", parámetros }, "*");
 };
window.console.log =
 /** @param {any[]} parámetros */
 (...parámetros) => {
  lo.apply(null, parámetros);
  window.top.postMessage({ op: "log", parámetros }, "*");
 };
window.console.error =
 /** @param {any[]} parámetros */
 (...parámetros) => {
  window.top.postMessage({ op: "error", parámetros }, "*");
  err.apply(null, parámetros);
 };
