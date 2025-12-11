import { DeleteIcon } from "../i18n/lite/DeleteIcon.js"
import { deleteTitleText } from "../i18n/text/deleteTitleText.js"
import { button } from "./button.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *               LiteElementParameter<HTMLButtonElement,
 *               import("./button.js").HTMLButtonElementProperties>[]} contents
 */
export function DeleteButton(...contents) {
 return button({
  type: "button",
  title: deleteTitleText(),
 },
  DeleteIcon(),
  ...contents
 )
}