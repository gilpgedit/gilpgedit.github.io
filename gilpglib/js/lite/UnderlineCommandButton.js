import { UnderlinedIcon } from "../i18n/lite/UnderlinedIcon.js"
import { underlineText } from "../i18n/text/underlineText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function UnderlineCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: underlineText(), command: "underline" },
  UnderlinedIcon()
 )
}