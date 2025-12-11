import { backAccessKey } from "../i18n/accessKey/backAccessKey.js"
import { CancelIcon } from "../i18n/lite/CancelIcon.js"
import { cancelTitleText } from "../i18n/text/cancelTitleText.js"
import { RequestDiscardA } from "./RequestDiscardA.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                           LiteElementParameter<HTMLAnchorElement,
 *                    import("./a.js").HTMLAnchorElementProperties>[]} contents
 */
export function CancelA(...contents) {
 return RequestDiscardA({
  tiltleAndAccessKey: [cancelTitleText(), backAccessKey()]
 },
  CancelIcon(),
  ...contents
 )
}