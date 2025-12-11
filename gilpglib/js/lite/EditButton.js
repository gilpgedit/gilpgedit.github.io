import { editAccessKey } from "../i18n/accessKey/editAccessKey.js"
import { EditIcon } from "../i18n/lite/EditIcon.js"
import { editTitleText } from "../i18n/text/editTitleText.js"
import { button } from "./button.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *               LiteElementParameter<HTMLButtonElement,
 *               import("./button.js").HTMLButtonElementProperties>[]} contents
 */
export function EditButton(...contents) {
 return button({
  type: "button",
  tiltleAndAccessKey: [editTitleText(), editAccessKey()]
 },
  EditIcon(),
  ...contents
 )
}