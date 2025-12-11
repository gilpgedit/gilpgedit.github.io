/**
 * @param {string} nameForUser
 * @param {number} number
 * @param {number} max
 */
export function numericMaxValueIncorrectTemplate(nameForUser, number, max) {
 return `El campo ${nameForUser} vale ${number
  }, pero el máximo permitido es de ${max}. Proporciona un valor más pequeño.`
}
