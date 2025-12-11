/**
 * @param {string} nameForUser
 * @param {number | string} value
 * @param {number | string} min
 */
export function minValueIncorrectTemplate(nameForUser, value, min) {
 return `El campo ${nameForUser} vale ${value}, pero al menos debe valer ${min
  }. Proporciona un valor más grande.`
}