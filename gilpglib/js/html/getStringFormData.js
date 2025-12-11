import {
 FieldValueMustBeStringTemplate
} from "../i18n/template/FieldValueMustBeStringTemplate.js"
import { stringOrEmpty } from "../stringOrEmpty.js"

/**
 * @param {FormData} formData
 * @param {string} formName
 * @param {string} nameForUser
 */
export function getStringFormData(formData, formName, nameForUser) {
 const data = formData.get(formName)
 if (typeof data !== "string")
  throw new Error(FieldValueMustBeStringTemplate(nameForUser))

 return stringOrEmpty(data)
}