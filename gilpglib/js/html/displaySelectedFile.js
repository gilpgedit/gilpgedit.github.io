import { errorDisplay } from "../di/errorDisplay.js"
import { getSelectionDataUrl } from "./getSelectionDataUrl.js"

/**
 * Shows the selected file inside an img.
 * @param {HTMLInputElement | null | undefined} input input to be analyzed.
 * @param {HTMLImageElement | null | undefined} img
 */
export function displaySelectedFile(input, img) {
 if (input && img) {
  try {
   const dataUrl = getSelectionDataUrl(input)
   if (dataUrl) {
    img.hidden = false
    img.src = dataUrl
   } else {
    const file = input.dataset.file
    if (file) {
     img.hidden = false
     img.src = dataUrl
    } else {
     img.hidden = true
     img.src = ""
    }
   }

  } catch (error) {
   img.hidden = true
   errorDisplay(error)
  }
 }
}