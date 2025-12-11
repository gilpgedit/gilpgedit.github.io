import { RedoIcon } from "../i18n/lite/RedoIcon.js"
import { redoText } from "../i18n/text/redoText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function RedoCommandButton(richText) {
 return RichTextCommandButton({ richText, title: redoText(), command: "redo" },
  RedoIcon()
 )
}