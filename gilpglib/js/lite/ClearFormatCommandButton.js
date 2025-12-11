import { ClearFormatIcon } from "../i18n/lite/ClearFormatIcon.js"
import { clearFormatText } from "../i18n/text/clearFormatText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function ClearFormatCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: clearFormatText(), command: "removeFormat" },
  ClearFormatIcon()
 )
}