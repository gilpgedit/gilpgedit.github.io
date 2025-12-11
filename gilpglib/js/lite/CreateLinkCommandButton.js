import { CreateLinkIcon } from "../i18n/lite/CreateLinkIcon.js"
import { createLinkText } from "../i18n/text/createLinkText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function CreateLinkCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: createLinkText(), command: "createLink" },
  CreateLinkIcon()
 )
}