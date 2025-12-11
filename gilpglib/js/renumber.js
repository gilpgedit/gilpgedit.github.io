/**
 * @param {Readonly<array>} models
 * @param {string} orderField
 */
export function renumber(models, orderField) {
 for (let i = 0, len = models.length; i < len; i++) {
  models[i][orderField] = i + 1
 }
}