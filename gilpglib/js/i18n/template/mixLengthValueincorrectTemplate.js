/**
 * @param {string} nameForUser
 * @param {number} length
 * @param {number} minLength
 * @param {number} difference
 */
export function minLengthValueincorrectTemplate(nameForUser, length, minLength
 , difference) {
 return `El campo ${nameForUser} tiene ${length
  } caracteres, pero al menos dene tener ${minLength
  }. Elimina al menos ${difference} caracteres.`
}
