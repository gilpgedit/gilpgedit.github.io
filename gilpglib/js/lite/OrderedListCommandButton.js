import { NumberedListlIcon } from "../i18n/lite/NumberedListlIcon.js"
import { numberedListText } from "../i18n/text/numberedListText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function OrderedListCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: numberedListText(), command: "insertOrderedList" },
  NumberedListlIcon()
 )
}