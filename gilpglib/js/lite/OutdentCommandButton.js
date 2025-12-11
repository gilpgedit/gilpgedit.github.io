import { OutdentIcon } from "../i18n/lite/OutdentIcon.js"
import { outdentText } from "../i18n/text/outdentText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function OutdentCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: outdentText(), command: "outdent" },
  OutdentIcon()
 )
}