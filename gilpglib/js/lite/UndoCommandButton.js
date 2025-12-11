import { UndoIcon } from "../i18n/lite/UndoIcon.js"
import { undoText } from "../i18n/text/undoText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function UndoCommandButton(richText) {
 return RichTextCommandButton({ richText, title: undoText(), command: "undo" },
  UndoIcon()
 )
}