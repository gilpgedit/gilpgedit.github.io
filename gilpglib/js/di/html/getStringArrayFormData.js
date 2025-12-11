/**
 * @param {FormData} formData
 * @param {string} name
 */
export function getStringArrayFormData(formData, name) {
 return formData.getAll(name).filter(v => typeof v === "string")
}