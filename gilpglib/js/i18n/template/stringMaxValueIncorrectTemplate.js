/**
 * @param {string} formUserName
 * @param {string} text
 * @param {string} max
 */
export function stringMaxValueIncorrectTemplate(formUserName, text, max) {
 return `El campo ${formUserName} vale ${text}, pero debe ir antes de de ${max
  }. Proporciona un valor previo.`
}