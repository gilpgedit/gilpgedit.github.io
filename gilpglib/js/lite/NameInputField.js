import { name_name } from "../const/name_name.js"
import { nameAccessKey } from "../i18n/accessKey/nameAccessKey.js"
import { nameText } from "../i18n/text/nameText.js"
import { EditionField } from "./EditionField.js"
import { input } from "./input.js"

/**
 * @param {import("./parameter/LiteGroupParameter.js").LiteGroupParameter<
 *  HTMLParagraphElement,
 *  {
 *    liteNode: HTMLParagraphElement,
 *    targetElement: HTMLInputElement,
 *   }>[]} contents
 */
export function NameInputField(...contents) {
 return EditionField({
  caption: nameText(),
  accessKey: nameAccessKey(),
  targetElement: input({
   name: name_name,
   type: "text",
   autocomplete: "name"
  })
 },
  ...contents
 )
}