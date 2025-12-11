import { JustifyRightIcon } from "../i18n/lite/JustifyRightIcon.js"
import { justifyRightText } from "../i18n/text/justifyRightText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */

export function JustifyRightCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: justifyRightText(), command: "justifyRight" },
  JustifyRightIcon()
 )
}