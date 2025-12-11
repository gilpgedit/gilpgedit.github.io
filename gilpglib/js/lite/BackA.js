import { backAccessKey } from "../i18n/accessKey/backAccessKey.js"
import { BackIcon } from "../i18n/lite/BackIcon.js"
import { backTitleText } from "../i18n/text/backTitleText.js"
import { RequestDiscardA } from "./RequestDiscardA.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                           LiteElementParameter<HTMLAnchorElement,
 *                    import("./a.js").HTMLAnchorElementProperties>[]} contents
 */
export function BackA(...contents) {
 return RequestDiscardA({
  tiltleAndAccessKey: [backTitleText(), backAccessKey()]
 },
  BackIcon(),
  ...contents
 )
}