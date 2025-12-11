import { htmlExport } from "./htmlExport.js"
import { ProblemDetails } from "../ProblemDetails.js"

/**
 * Waits for a fetch promise to end. If
 * there is an error, throws an exception. If there is no error,
 * assumes that server response is JSON and obtains the corresponding
 * object literal.
 * 
 * @param { string | Promise<Response> } service
 */
export async function consumeJson(service) {

 if (typeof service === "string") {
  service = fetch(service, {
   headers: { "Accept": "application/json, application/problem+json" }
  })
 } else if (!(service instanceof Promise)) {
  throw new Error("Servicio de tipo incorrecto.")
 }

 const response = await service

 const headers = response.headers

 if (response.ok) {
  // It seems that server finished ok.

  if (response.status === 204) {
   // There's no body.

   return { headers, body: {} }

  } else {

   const texto = await response.text()

   try {

    return { headers, body: JSON.parse(texto) }

   } catch (error) {

    // Content type isn't JSON. It could be an error text.
    throw new ProblemDetails(response.status, headers, texto,
     "/internalerror.html")

   }

  }

 } else {
  // There's an error.

  const text = await response.text()

  if (text === "") {

   // No error text. Use default status text.
   throw new ProblemDetails(response.status, headers, response.statusText)

  } else {
   // Error description must be a JSON ProblemDetails.

   try {

    const { title, type, detail } = JSON.parse(text)

    throw new ProblemDetails(response.status, headers,
     typeof title === "string" ? title : response.statusText,
     typeof type === "string" ? type : undefined,
     typeof detail === "string" ? detail : undefined)

   } catch (error) {

    if (error instanceof ProblemDetails) {
     // The error is a ProblemDetails

     throw error

    } else {

     throw new ProblemDetails(response.status, headers, response.statusText,
      undefined, text)

    }

   }

  }

 }

}

htmlExport(consumeJson)