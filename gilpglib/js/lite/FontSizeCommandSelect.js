import { fontSizeText } from "../i18n/text/fontSizeText.js"
import { largeText } from "../i18n/text/largeText.js"
import { mediumText } from "../i18n/text/mediumText.js"
import { normalText } from "../i18n/text/normalText.js"
import { sixeText } from "../i18n/text/sixeText.js"
import { smallText } from "../i18n/text/smallText.js"
import { verySmallText } from "../i18n/text/verySmallText.js"
import { xLargeText } from "../i18n/text/xLargeText.js"
import { xXLargeText } from "../i18n/text/xXLargeText.js"
import { option } from "./option.js"
import { RichTextCommandSelect } from "./RichTextCommandSelect.js"
import { RichTextMainOption } from "./RichTextMainOption.js"

/**
 * @param {HTMLElement} richText
 */
export function FontSizeCommandSelect(richText) {
 return RichTextCommandSelect(
  { richText, title: fontSizeText(), command: "fontsize" },
  RichTextMainOption(sixeText()),
  option({ value: "1" }, verySmallText()),
  option({ value: "2" }, smallText()),
  option({ value: "3" }, normalText()),
  option({ value: "4" }, mediumText()),
  option({ value: "5" }, largeText()),
  option({ value: "6" }, xLargeText()),
  option({ value: "7" }, xXLargeText())
 )
}