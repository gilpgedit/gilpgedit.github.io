import { backAccessKey } from "../i18n/accessKey/backAccessKey.js"
import { CancelIcon } from "../i18n/lite/CancelIcon.js"
import { cancelTitleText } from "../i18n/text/cancelTitleText.js"
import { button } from "./button.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *               LiteElementParameter<HTMLButtonElement,
 *               import("./button.js").HTMLButtonElementProperties>[]} contents
 */
export function CancelButton(...contents) {
 return button({
  type: "button",
  tiltleAndAccessKey: [cancelTitleText(), backAccessKey()]
 },
  CancelIcon(),
  ...contents
 )
}