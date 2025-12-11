import { addAccessKey } from "../i18n/accessKey/addAccessKey.js"
import { AddIcon } from "../i18n/lite/AddIcon.js"
import { addTitleText } from "../i18n/text/addTitleText.js"
import { RequestDiscardA } from "./RequestDiscardA.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                           LiteElementParameter<HTMLAnchorElement,
 *                    import("./a.js").HTMLAnchorElementProperties>[]} contents
 */
export function AddA(...contents) {
 return RequestDiscardA({
  tiltleAndAccessKey: [addTitleText(), addAccessKey()]
 },
  AddIcon(),
  ...contents
 )
}