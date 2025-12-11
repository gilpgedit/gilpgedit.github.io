import { option } from "./option.js"

/**
 * @param {string} text
 */
export function RichTextMainOption(text) {
 return option(
  {
   selected: true,
   style: { fontWeight: "bold", textAlign: "center" }
  },
  text
 )
}