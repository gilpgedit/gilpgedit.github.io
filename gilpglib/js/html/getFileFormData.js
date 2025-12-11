import {
 fileInvalidTypeText
} from "../../../src/js/i18n/text/fileInvalidTypeText.js"

/**
 * @param {FormData} formData
 * @param {string} name
 */
export function getFileFormData(formData, name) {
 const value = formData.get(name)
 if (value !== null && !(value instanceof File))
  throw new Error(fileInvalidTypeText())
 return value
}