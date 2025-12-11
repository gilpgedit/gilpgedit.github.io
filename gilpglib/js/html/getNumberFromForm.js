import {
 valueAsNumber_property
} from "../const/valueAsNumber_property.js"
import { numberOrNaN } from "../numberOrNaN.js"
import { getProperty } from "./getProperty.js"

/**
 * @param {HTMLFormElement} form
 * @param {string} name
 */
export function getNumberFromForm(form, name) {
 return numberOrNaN(getProperty(form, name, valueAsNumber_property))
}