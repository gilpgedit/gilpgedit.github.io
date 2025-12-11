import { name_name } from "../const/name_name.js"
import { nameAccessKey } from "../i18n/accessKey/nameAccessKey.js"
import { nameText } from "../i18n/text/nameText.js"
import { EditionField } from "./EditionField.js"
import { ResizeTextArea } from "./ResizeTextArea.js"

/**
 * @param {import("./parameter/LiteGroupParameter.js").LiteGroupParameter<
 *   HTMLParagraphElement,
 *  {
 *    liteNode: HTMLParagraphElement,
 *    targetElement: HTMLTextAreaElement,
 *   }>[]} contents
 */
export function NameTextAreaField(...contents) {
 return EditionField({
  caption: nameText(),
  accessKey: nameAccessKey(),
  targetElement: ResizeTextArea({
   name: name_name,
   autocomplete: "name"
  })
 },
  ...contents
 )
}