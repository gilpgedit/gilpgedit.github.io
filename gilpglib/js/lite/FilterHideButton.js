import { FilterHideIcon } from "../i18n/lite/FilterHideIcon.js"
import { filterHideText } from "../i18n/text/filterHideText.js"
import { button } from "./button.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *               LiteElementParameter<HTMLButtonElement,
 *               import("./button.js").HTMLButtonElementProperties>[]} contents
 */
export function FilterHideButton(...contents) {
 return button({
  type: "button",
  title: filterHideText(),
 },
  FilterHideIcon(),
  ...contents
 )
}