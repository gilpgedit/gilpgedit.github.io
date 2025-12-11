import { innerHTML_property } from "../const/innerHTML_property.js"
import { functionNameForHtml } from "./functionNameForHtml.js"
import { htmlentities } from "./htmlentities.js"
import { methodExecute_function } from "./methodExecute.js"

/**
 * Tag function that analyzes an string template and returns an object with a
 * sanitized innerHTML string field.
 * @param {TemplateStringsArray} strings
 * @param {any[]} values
 * @returns {import("./HtmlText.js").HtmlText}
 */
export function html(strings, ...values) {

 let text = ""
 let i = 0, stringsLength = strings.length, valuesLength = values.length

 for (; i < stringsLength && i < valuesLength; i++) {
  text += strings[i]
  const value = values[i]
  text += valueSanitize(value)
 }

 for (; i < stringsLength; i++) {
  text += strings[i]
 }

 for (; i < valuesLength; i++) {
  const value = values[i]
  text += valueSanitize(value)
 }

 return { [innerHTML_property]: text }

}

/**
 * Saintizes the array element at i position.
 * @param {any} value
 * @returns {string}
 */
function valueSanitize(value) {

 switch (typeof value) {

  case "string":
   return htmlentities(value)

  case "function": {
   const name = htmlentities(functionNameForHtml(value))
   return `${methodExecute_function}(this,&quot;${name}&quot;,event)`
  }

  case "boolean":
  case "number":
   return value.toString()

  case "undefined":
   return ""

  default:
   const text = value[innerHTML_property]
   if (typeof text === "string") {
    return text
   } else if (Array.isArray(value)) {
    return value.map(valueSanitize).join("")
   } else if (typeof value.toString === "function") {
    return value.toString()
   } else {
    return ""
   }
 }

}