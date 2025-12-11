import { JustifyCenterIcon } from "../i18n/lite/JustifyCenterIcon.js"
import { justifyCenterText } from "../i18n/text/justifyCenterText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function JustifyCenterCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: justifyCenterText(), command: "justifyCenter" },
  JustifyCenterIcon()
 )
}