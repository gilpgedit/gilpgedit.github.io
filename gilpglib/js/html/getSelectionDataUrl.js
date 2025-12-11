import { selectedFile } from "./selectedFile.js"

/**
 * @param {HTMLInputElement} input
 */
export function getSelectionDataUrl(input) {
 const selection = selectedFile(input)
 if (selection === null) {
  return ""
 } else {
  return URL.createObjectURL(selection)
 }
}