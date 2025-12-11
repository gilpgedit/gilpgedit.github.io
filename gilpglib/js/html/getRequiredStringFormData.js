/**
 * @param {FormData} formData
 * @param {string} name
 * @param {string} errorMessage
 */
export function getRequiredStringFormData(formData, name, errorMessage) {
 let data = formData.get(name)
 if (typeof data !== "string") throw new Error(errorMessage)
 data = data.trim()
 if (!data) throw new Error(errorMessage)
 return data
}