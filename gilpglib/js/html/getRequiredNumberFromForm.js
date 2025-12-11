import { valueAsNumber_property } from "../const/valueAsNumber_property.js"
import { getProperty } from "./getProperty.js"

/**
 * @param {HTMLFormElement} form
 * @param {string} name
 * @param {string} errorMessage
 */
export function getRequiredNumberFromForm(form, name, errorMessage) {
 const data = getProperty(form, name, valueAsNumber_property)
 if (typeof data !== "number" || isNaN(data)) throw new Error(errorMessage)
 return data
}