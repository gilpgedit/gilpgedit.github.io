import { SubScriptIcon } from "../i18n/lite/SubScriptIcon.js"
import { subScriptText } from "../i18n/text/subScriptText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function SubScriptCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: subScriptText(), command: "subscript" },
  SubScriptIcon()
 )
}