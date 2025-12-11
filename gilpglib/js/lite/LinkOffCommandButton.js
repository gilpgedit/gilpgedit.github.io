import { LinkOffIcon } from "../i18n/lite/LinkOffIcon.js"
import { linkOffText } from "../i18n/text/linkOffText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function LinkOffCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: linkOffText(), command: "unlink" },
  LinkOffIcon()
 )
}