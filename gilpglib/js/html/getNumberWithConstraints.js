import { valueAsNumber_property } from "../const/valueAsNumber_property.js"
import {
 FieldValueMustBeNumberTemplate
} from "../i18n/template/FieldValueMustBeNumberTemplate.js"
import { getProperty } from "./getProperty.js"
import {
 validateNumberWithConstraints
} from "./validateNumberWithConstraints.js"

/**
 * @param {HTMLFormElement} form
 * @param {string} formName
 * @param {string} nameForUser
 * @param {import("./NumberConstraints.js").NumberConstraints} constraints
 */
export function getNumberWithConstraints(form, formName, nameForUser
 , constraints) {
 const data = getProperty(form, formName, valueAsNumber_property)
 if (typeof data !== "number" && data !== null && data !== undefined)
  throw new Error(FieldValueMustBeNumberTemplate(nameForUser))
 const result = validateNumberWithConstraints(data, nameForUser, constraints)
 return result === null? undefined : result
}