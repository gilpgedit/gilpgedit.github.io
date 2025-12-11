import { BulletedListIcon } from "../i18n/lite/BulletedListlIcon.js"
import { bulletedListText } from "../i18n/text/bulletedListText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function UnorderedListCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: bulletedListText(), command: "insertUnorderedList" },
  BulletedListIcon()
 )
}