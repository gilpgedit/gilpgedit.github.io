import {
 FieldValueMustBeStringTemplate
} from "../i18n/template/FieldValueMustBeStringTemplate.js"
import {
 validateStringWithConstraints
} from "./validateStringWithConstraints.js"

/**
 * @param {FormData} formData
 * @param {string} formName
 * @param {string} nameForUser
 * @param {import("./StringConstraints.js").StringConstraints} constraints
 */
export function getStringWithConstraints(formData, formName, nameForUser
 , constraints) {
 const data = formData.get(formName)
 if (typeof data !== "string" && data !== null)
  throw new Error(FieldValueMustBeStringTemplate(nameForUser))
 return validateStringWithConstraints(data, nameForUser, constraints)
}