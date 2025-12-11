import { spacesCollapse } from "./spacesCollapse.js"

/**
 * Prepares a text to be used in search algorithms: Collapses spaces,
 * converts text to upper case and finally, gets rid of accents and tildes.
 * @param {string} text to be transformed.
 */
export function up(text) {
 return spacesCollapse(text).
  toUpperCase().
  replace(/(á|Á|é|É|í|Í|ó|Ó|ú|Ú|ñ|Ñ)/g, letter => {
   switch (letter) {
    case "á":
    case "Á": return "A"
    case "é":
    case "É": return "E"
    case "í":
    case "Í": return "I"
    case "ó":
    case "Ó": return "O"
    case "ú":
    case "Ú": return "U"
    case "ñ":
    case "Ñ": return "N"
    default: return letter
   }
  })
}