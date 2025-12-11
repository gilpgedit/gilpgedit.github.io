/**
 * @param {string} nameForUser
 * @param {number} length
 * @param {number} maxLength
 * @param {number} difference
 */
export function maxLengthValueincorrectTemplate(nameForUser, length, maxLength
 , difference) {
 return `El campo ${nameForUser} tiene ${length
  } caracteres, pero el máxino permitido es de ${maxLength
  }. Agrega al menos ${difference} caracteres.`
}