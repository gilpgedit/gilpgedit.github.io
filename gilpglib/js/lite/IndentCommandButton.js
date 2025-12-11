import { IndentIcon } from "../i18n/lite/IndentIcon.js"
import { IndentText } from "../i18n/text/IndentText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function IndentCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: IndentText(), command: "indent" },
  IndentIcon()
 )
}