import {manifest, version} from '@parcel/service-worker';

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */
const VERSION = "3.00"

// Verifica si el código corre dentro de un service worker.
if (self instanceof ServiceWorkerGlobalScope) {
 // Evento al empezar a instalar el servide worker,
 self.addEventListener("install",
  (/** @type {ExtendableEvent} */ evt) => {
   console.log("El service worker se está instalando.")
   evt.waitUntil(llenaElCache())
  })
 // Evento al solicitar información a la red.
 self.addEventListener("fetch", (/** @type {FetchEvent} */ evt) => {
  if (evt.request.method === "GET") {
   evt.respondWith(buscaLaRespuestaEnElCache(evt))
  }
 })
 // Evento cuando el service worker se vuelve activo.
 self.addEventListener("activate",
  () => console.log("El service worker está activo."))
}
async function llenaElCache() {
 console.log("Intentando cargar caché:", version)
 // Borra todos los cachés.
 const keys = await caches.keys()
  await Promise.all(
    keys.map(key => caches.delete(key))
  );
 // Abre el caché de este service worker.
 const cache = await caches.open(version)
 // Carga el listado de ARCHIVOS.
 await cache.addAll(manifest)
 console.log("Cache cargado:", version)
 console.log("Versión:", VERSION)
}
/** @param {FetchEvent} evt */
async function buscaLaRespuestaEnElCache(evt) {
 // Abre el caché.
 const cache = await caches.open(version)
 const request = evt.request
 /* Busca la respuesta a la solicitud en el contenido del caché, sin
  * tomar en cuenta la parte después del símbolo "?" en la URL. */
 const response = await cache.match(request, { ignoreSearch: true })
 if (response === undefined) {
  /* Si no la encuentra, empieza a descargar de la red y devuelve
   * la promesa. */
  return fetch(request)
 } else {
  // Si la encuentra, devuelve la respuesta encontrada en el caché.
  return response
 }
}