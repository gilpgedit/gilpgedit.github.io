import { fontNameText } from "../i18n/text/fontNameText.js"
import { fontText } from "../i18n/text/fontText.js"
import { monospaceText } from "../i18n/text/monospaceText.js"
import { sansSerifText } from "../i18n/text/sansSerifText.js"
import { serifText } from "../i18n/text/serifText.js"
import { option } from "./option.js"
import { RichTextCommandSelect } from "./RichTextCommandSelect.js"
import { RichTextMainOption } from "./RichTextMainOption.js"

/**
 * @param {HTMLElement} richText
 */
export function FontNameCommandSelect(richText) {
 return RichTextCommandSelect(
  { richText, title: fontNameText(), command: "fontname" },
  RichTextMainOption(fontText()),
  option({ value: "serif" }, serifText()),
  option({ value: "sans-serif" }, sansSerifText()),
  option({ value: "monospace" }, monospaceText())
 )
}