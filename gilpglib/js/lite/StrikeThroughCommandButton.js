import { StrikeThroughIcon } from "../i18n/lite/StrikeThroughIcon.js"
import { strikeThroughText } from "../i18n/text/strikeThroughText.js"
import { RichTextCommandButton } from "./RichTextCommandButton.js"

/**
 * @param {HTMLElement} richText
 */
export function StrikeThroughCommandButton(richText) {
 return RichTextCommandButton(
  { richText, title: strikeThroughText(), command: "strikeThrough" },
  StrikeThroughIcon()
 )
}