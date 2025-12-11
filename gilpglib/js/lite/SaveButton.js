import { setTiltleAndAccessKey } from "../html/setTiltleAndAccessKey.js"
import { saveAccessKey } from "../i18n/accessKey/saveAccessKey.js"
import { SaveIcon } from "../i18n/lite/SaveIcon.js"
import { saveTitleText } from "../i18n/text/saveTitleText.js"
import { button } from "./button.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                  LiteElementParameter<HTMLButtonElement,
 *               import("./button.js").HTMLButtonElementProperties>[]} contents
 */
export function SaveButton(...contents) {
 return button({ type: "submit" },
  function () { setTiltleAndAccessKey(this, saveTitleText(), saveAccessKey()) },
  SaveIcon(),
  ...contents
 )
}