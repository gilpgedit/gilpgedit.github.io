import { FilterDisplayIcon } from "../i18n/lite/FilterDisplayIcon.js"
import { filterDisplayText } from "../i18n/text/filterDisplayText.js"
import { button } from "./button.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *               LiteElementParameter<HTMLButtonElement,
 *               import("./button.js").HTMLButtonElementProperties>[]} contents
 */
export function FilterDisplayButton(...contents) {
 return button({
  type: "button",
  title: filterDisplayText(),
 },
  FilterDisplayIcon(),
  ...contents
 )
}