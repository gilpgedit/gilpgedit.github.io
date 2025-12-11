import { max_property } from "../const/max_property.js"
import { min_property } from "../const/min_property.js"
import { required_property } from "../const/required_property.js"
import { fieldMissingTemplate } from "../i18n/template/fieldMissingTemplate.js"
import {
 minValueIncorrectTemplate
} from "../i18n/template/minValueIncorrectTemplate.js"
import {
 numericMaxConstraintIncorrectTemplate
} from "../i18n/template/numericMaxConstraintIncorrectTemplate.js"
import {
 numericMaxValueIncorrectTemplate
} from "../i18n/template/numericMaxValueIncorrectTemplate.js"
import {
 numericMinConstraintIncorrectTemplate
} from "../i18n/template/numericMinConstraintIncorrectTemplate.js"

/**
 * @param {number | null} value
 * @param {string} nameForUser
 * @param {import("./NumberConstraints.js").NumberConstraints} constraints
 */
export function validateNumberWithConstraints(value, nameForUser
 , constraints) {
 for (let i = 0, names = Object.getOwnPropertyNames(constraints)
  , len = names.length; i < len; i++) {
  const element = names[i]
  switch (element) {
   case max_property:
    _validateMax(constraints, nameForUser, value)
    continue
   case min_property:
    _validateMin(constraints, nameForUser, value)
    continue
   case required_property:
    _validateRequired(constraints, nameForUser, value)
    continue
  }
 }
 return value
}

/**
 * @param {import("./NumberConstraints.js").NumberConstraints} constraints
 * @param {string} nameForUser
 * @param {number | null} value
 */
function _validateMax(constraints, nameForUser, value) {
 const max = constraints.max
 if (typeof max !== "string")
  throw new Error(numericMaxConstraintIncorrectTemplate(nameForUser))
 const maxValue = parseFloat(max)
 if (isNaN(maxValue))
  throw new Error(numericMaxConstraintIncorrectTemplate(nameForUser))
 if (value !== null && value !== undefined && !isNaN(value) && maxValue < value)
  throw new Error(
   numericMaxValueIncorrectTemplate(nameForUser, value, maxValue))
}

/**
 * @param {import("./NumberConstraints.js").NumberConstraints} constraints
 * @param {string} nameForUser
 * @param {number | null} value
 */
function _validateMin(constraints, nameForUser, value) {
 const min = constraints.min
 if (typeof min !== "string")
  throw new Error(numericMinConstraintIncorrectTemplate(nameForUser))
 const minValue = parseFloat(min)
 if (isNaN(minValue))
  throw new Error(numericMinConstraintIncorrectTemplate(nameForUser))
 if (value !== null && value !== undefined && !isNaN(value) && minValue > value)
  throw new Error(minValueIncorrectTemplate(nameForUser, value, minValue))
}

/**
 * @param {import("./NumberConstraints.js").NumberConstraints} constraints
 * @param {string} nameForUser
 * @param {number | null} value
 */
function _validateRequired(constraints, nameForUser, value) {
 if (constraints.required
  && (value === null || value === undefined || isNaN(value)))
  throw new Error(fieldMissingTemplate(nameForUser))
}
