import { checked_property } from "../const/checked_property.js"
import { getProperty } from "./getProperty.js"

/**
 * @param {HTMLFormElement} form
 * @param {string} name
 */
export function getCheckedFromForm(form, name) {
 return !!getProperty(form, name, checked_property)
}