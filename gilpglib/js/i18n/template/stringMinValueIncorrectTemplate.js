/**
 * @param {string} nameForUser
 * @param {number | string} value
 * @param {number | string} min
 */
export function stringMinValueIncorrectTemplate(nameForUser, value, min) {
 return `El campo ${nameForUser} vale ${value}, pero debe ir después de ${min
  }. Proporciona un valor posterior.`
}