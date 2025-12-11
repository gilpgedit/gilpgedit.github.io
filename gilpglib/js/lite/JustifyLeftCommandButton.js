import { JustifyLeftIcon } from "../i18n/lite/JustifyLeftIcon.js"
import { justifyLeftText } from "../i18n/text/justifyLeftText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function JustifyLeftCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: justifyLeftText(), command: "justifyLeft" },
  JustifyLeftIcon()
 )
}