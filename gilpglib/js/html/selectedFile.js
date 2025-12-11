/** Returns the selected file from an input type="file".
 * @param {HTMLInputElement | null | undefined} file input que se analiza.
 * @returns {File | null} returns the selected file; else, returns false. */
export function selectedFile(file) {
 if (file && file.files) {
  return file.files[0] || null
 } else {
  return null
 }
}