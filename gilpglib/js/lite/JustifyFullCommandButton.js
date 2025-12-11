import { JustifyFullIcon } from "../i18n/lite/JustifyFullIcon.js"
import { justifyFullText } from "../i18n/text/justifyFullText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */

export function JustifyFullCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: justifyFullText(), command: "justifyFull" },
  JustifyFullIcon()
 )
}