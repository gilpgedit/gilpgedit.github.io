import { normalText } from "../i18n/text/normalText.js"
import { paragraphStylesText } from "../i18n/text/paragraphStylesText.js"
import { paragraphText } from "../i18n/text/paragraphText.js"
import { stylesText } from "../i18n/text/stylesText.js"
import { title1Text } from "../i18n/text/title1Text.js"
import { title2Text } from "../i18n/text/title2Text.js"
import { title3Text } from "../i18n/text/title3Text.js"
import { title4Text } from "../i18n/text/title4Text.js"
import { title5Text } from "../i18n/text/title5Text.js"
import { title6Text } from "../i18n/text/title6Text.js"
import { option } from "./option.js"
import { RichTextCommandSelect } from "./RichTextCommandSelect.js"
import { RichTextMainOption } from "./RichTextMainOption.js"

/**
 * @param {HTMLElement} richText
 */
export function ParagraphStyleCommandSelect(richText) {
 return RichTextCommandSelect(
  { richText, title: paragraphStylesText(), command: "formatblock" },
  RichTextMainOption(stylesText()),
  option({ value: "div" }, normalText()),
  option({ value: "p" }, paragraphText()),
  option({ value: "h1" }, title1Text()),
  option({ value: "h2" }, title2Text()),
  option({ value: "h3" }, title3Text()),
  option({ value: "h4" }, title4Text()),
  option({ value: "h5" }, title5Text()),
  option({ value: "h6" }, title6Text())
 )
}