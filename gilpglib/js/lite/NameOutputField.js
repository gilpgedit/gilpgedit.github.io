import { name_name } from "../const/name_name.js"
import { nameText } from "../i18n/text/nameText.js"
import { output } from "./output.js"
import { ReadOnlyField } from "./ReadOnlyField.js"

/**
 * @param {import("./parameter/LiteGroupParameter.js").LiteGroupParameter<
 *   HTMLParagraphElement,
 *  {
 *    liteNode: HTMLParagraphElement,
 *    targetElement: HTMLOutputElement,
 *   }>[]} contents
 */
export function NameOutputField(...contents) {
 return ReadOnlyField({
  caption: nameText(), targetElement: output({ name: name_name })
 },
  ...contents)
}