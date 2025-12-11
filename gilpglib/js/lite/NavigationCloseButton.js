import { navigationToggle } from "../html/navigationToggle.js"
import { NavigationCloseIcon } from "../i18n/lite/NavigationCloseIcon.js"
import { navigationCloseText } from "../i18n/text/navigationCloseText.js"
import { button } from "./button.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLButtonElement,
 *               import("./button.js").HTMLButtonElementProperties>[]} contents
 */
export function NavigationCloseButton(...contents) {
 return button({
  type: "button",
  title: navigationCloseText(),
  onclick: navigationToggle
 },
  NavigationCloseIcon(),
  ...contents,
 )
}