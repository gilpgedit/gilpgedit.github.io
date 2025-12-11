import { max_property } from "../const/max_property.js"
import { maxLength_property } from "../const/maxLength_property.js"
import { mimLength_property } from "../const/mimLength_property.js"
import { min_property } from "../const/min_property.js"
import { pattern_property } from "../const/pattern_property.js"
import { required_property } from "../const/required_property.js"
import { regExpNew } from "../di/regExpNew.js"
import {
 fieldMissingTemplate
} from "../i18n/template/fieldMissingTemplate.js"
import {
 maxLengthConstraintIncorrectTemplate
} from "../i18n/template/maxLengthConstraintIncorrectTemplate.js"
import {
 maxLengthValueincorrectTemplate
} from "../i18n/template/maxLengthValueincorrectTemplate.js"
import {
 minLengthConstraintIncorrectTemplate
} from "../i18n/template/minLengthConstraintIncorrectTemplate.js"
import {
 minLengthValueincorrectTemplate
} from "../i18n/template/mixLengthValueincorrectTemplate.js"
import {
 patternConstraintIncorrectTemplate
} from "../i18n/template/patternConstraintIncorrectTemplate.js"
import {
 patternValueIncorrectTemplate
} from "../i18n/template/patternValueIncorrectTemplate.js"
import {
 stringMaxConstraintIncorrectTemplate
} from "../i18n/template/stringMaxConstraintIncorrectTemplate.js"
import {
 stringMaxValueIncorrectTemplate
} from "../i18n/template/stringMaxValueIncorrectTemplate.js"
import {
 stringMinConstraintIncorrectTemplate
} from "../i18n/template/stringMinConstraintIncorrectTemplate.js"
import {
 stringMinValueIncorrectTemplate
} from "../i18n/template/stringMinValueIncorrectTemplate.js"
import { stringOrEmpty } from "../stringOrEmpty.js"

/**
 * @param {string | null | undefined} value
 * @param {string} nameForUser
 * @param {import("./StringConstraints.js").StringConstraints} constraints
 */
export function validateStringWithConstraints(value, nameForUser
 , constraints) {
 value = stringOrEmpty(value)
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
   case maxLength_property:
    _validateMaxLength(constraints, nameForUser, value)
    continue
   case mimLength_property:
    _validateMinLength(constraints, nameForUser, value)
    continue
   case pattern_property: _validatePattern(constraints, nameForUser, value)
    continue
   case required_property:
    _validateRequired(constraints, nameForUser, value)
    continue
  }
 }
 return value
}

/**
 * @param {import("./StringConstraints.js").StringConstraints} constraints
 * @param {string} nameForUser
 * @param {string} value
 */
function _validateMax(constraints, nameForUser, value) {
 const max = constraints.max
 if (typeof max !== "string")
  throw new Error(stringMaxConstraintIncorrectTemplate(nameForUser))
 if (max < value)
  throw new Error(stringMaxValueIncorrectTemplate(nameForUser, value, max))
}

/**
 * @param {import("./StringConstraints.js").StringConstraints} constraints
 * @param {string} nameForUser
 * @param {string} value
 */
function _validateMin(constraints, nameForUser, value) {
 const min = constraints.min
 if (typeof min !== "string")
  throw new Error(stringMinConstraintIncorrectTemplate(nameForUser))
 if (min > value)
  throw new Error(stringMinValueIncorrectTemplate(nameForUser, value, min))
}

/**
 * @param {import("./StringConstraints.js").StringConstraints} constraints
 * @param {string} nameForUser
 * @param {string} value
 */
function _validateMaxLength(constraints, nameForUser, value) {
 const maxLength = constraints.maxLength
 if (typeof maxLength !== "number" || isNaN(maxLength) || maxLength < 0)
  throw new Error(maxLengthConstraintIncorrectTemplate(nameForUser))
 const length = value.length
 const difference = length - maxLength
 if (difference > 0) throw new Error(
  maxLengthValueincorrectTemplate(nameForUser, length, maxLength, difference))
}

/**
 * @param {import("./StringConstraints.js").StringConstraints} constraints
 * @param {string} nameForUser
 * @param {string} value
 */
function _validateMinLength(constraints, nameForUser, value) {
 const minLength = constraints.minLength
 if (typeof minLength !== "number" || isNaN(minLength) || minLength < 0)
  throw new Error(minLengthConstraintIncorrectTemplate(nameForUser))
 const length = value.length
 const difference = minLength - length
 if (difference > 0) throw new Error(
  minLengthValueincorrectTemplate(nameForUser, length, minLength, difference))
}

/**
 * @param {import("./StringConstraints.js").StringConstraints} constraints
 * @param {string} nameForUser
 * @param {string} value
 */
function _validatePattern(constraints, nameForUser, value) {
 const pattern = constraints.pattern
 if (typeof pattern !== "string" || !pattern)
  throw new Error(patternConstraintIncorrectTemplate(nameForUser))
 const completePattern = regExpNew(`^${pattern}${"$"}`)
 if (!completePattern.test(value))
  throw new Error(patternValueIncorrectTemplate(nameForUser))
}

/**
 * @param {import("./StringConstraints.js").StringConstraints} constraints
 * @param {string} nameForUser
 * @param {string} value
 */
function _validateRequired(constraints, nameForUser, value) {
 if (constraints.required && !value.trim())
  throw new Error(fieldMissingTemplate(nameForUser))
}
