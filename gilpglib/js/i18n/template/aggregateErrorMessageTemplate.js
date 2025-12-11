/**
 * @param {string[]} errors
 */
export function aggregateErrorMessageTemplate(errors) {
 return `Se detectaron varios errores:
${errors.join("\n")}`
}