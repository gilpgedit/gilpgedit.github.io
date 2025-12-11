import { ItalicIcon } from "../i18n/lite/ItalicIcon.js"
import { italicText } from "../i18n/text/italicText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function ItalicCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: italicText(), command: "italic" },
  ItalicIcon()
 )
}