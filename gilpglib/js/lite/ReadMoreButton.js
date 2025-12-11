import { ReadMoreIcon } from "../i18n/lite/ReadMoreIcon.js"
import { readMoreText } from "../i18n/text/readMoreText.js"
import { button } from "./button.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *               LiteElementParameter<HTMLButtonElement,
 *               import("./button.js").HTMLButtonElementProperties>[]} contents
 */
export function ReadMoreButton(...contents) {
 return button({
  type: "button",
  title: readMoreText()
 },
  ReadMoreIcon(),
  ...contents
 )
}