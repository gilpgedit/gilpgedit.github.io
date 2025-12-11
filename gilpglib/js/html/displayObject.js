import { setNew } from "../di/setNew.js"
import { htmlExport } from "./htmlExport.js"
import { nameSelector } from "./nameSelector.js"

/**
 * @param { Document | HTMLElement } root
 * @param { Object } object
 */
export function displayObject(root, object) {
 for (let e = 0, entries = Object.entries(object), eLen = entries.length
  ; e < eLen; e++) {
  const [name, definitions] = entries[e]

  if (Array.isArray(definitions)) {

   displayArray(root, name, definitions)

  } else {

   switch (definitions) {
    case undefined:
    case null:

     continue

    default:

     const htmlElement = queryName(root, name)

     if (htmlElement instanceof HTMLInputElement) {

      displayInput(root, htmlElement, definitions)

     } else if (htmlElement !== null) {

      for (let p = 0, properties = Object.entries(definitions)
       , pLen = properties.length; p < pLen; p++) {
       const [propertyName, propertyValue] = properties[p]

       if (propertyName in htmlElement) {
        htmlElement[propertyName] = propertyValue
       }

      }

     }

   }

  }

 }
}
htmlExport(displayObject)

/**
 * @param { Document | HTMLElement } raizHtml
 * @param { string } name
 */
export function queryName(raizHtml, name) {
 return raizHtml.querySelector(nameSelector(name))
}

/**
 * @param { Document | HTMLElement } root
 * @param { string } property
 * @param {any[]} values
 */
function displayArray(root, property, values) {

 const valuesSet = setNew(values)
 const elements =
  root.querySelectorAll(`[name="${property}"],[data-name="${property}"]`)

 if (elements.length === 1) {

  const element = elements[0]
  if (element instanceof HTMLSelectElement) {
   for (let options = element.options, i = 0, len = options.length; i < len
    ; i++) {
    const option = options[i]
    option.selected = valuesSet.has(option.value)
   }
   return
  }

 }

 for (let i = 0, len = elements.length; i < len; i++) {
  const element = elements[i]
  if (element instanceof HTMLInputElement) {
   element.checked = valuesSet.has(element.value)
  }
 }

}

/**
 * @param { Document | HTMLElement } root
 * @param { HTMLInputElement } input
 * @param { any } definitions
 */
function displayInput(root, input, definitions) {

 for (let p = 0, properties = Object.entries(definitions)
  , pLen = properties.length; p < pLen; p++) {
  const [propertyName, propertyValue] = properties[p]

  if (propertyName == "data-file") {

   const img = getImgForHtmlElement(root, input)
   if (img !== null) {
    input.dataset.file = propertyValue
    input.value = ""
    if (propertyValue === "") {
     img.src = ""
     img.hidden = true
    } else {
     img.src = propertyValue
     img.hidden = false
    }
   }

  } else if (propertyName in input) {

   input[propertyName] = propertyValue

  }

 }

}

/**
 * @param { Document | HTMLElement } root
 * @param { HTMLElement } htmlElement
 */
export function getImgForHtmlElement(root, htmlElement) {
 const imgId = htmlElement.getAttribute("data-img")
 if (imgId === null) {
  return null
 } else {
  const input = queryName(root, imgId)
  if (input instanceof HTMLImageElement) {
   return input
  } else {
   return null
  }
 }
}