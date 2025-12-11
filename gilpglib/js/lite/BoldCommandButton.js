import { BoldIcon } from "../i18n/lite/BoldIcon.js"
import { boldText } from "../i18n/text/boldText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function BoldCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: boldText(), command: "bold" },
  BoldIcon()
 )
}