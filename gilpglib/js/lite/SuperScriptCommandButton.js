import { SuperScriptIcon } from "../i18n/lite/SuperScriptIcon.js"
import { superScriptText } from "../i18n/text/superScriptText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function SuperScriptCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: superScriptText(), command: "superscript" },
  SuperScriptIcon()
 )
}