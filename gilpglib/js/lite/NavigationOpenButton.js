import { navigationToggle } from "../html/navigationToggle.js"
import { NavigationIcon } from "../i18n/lite/NavigationIcon.js"
import { navigationOpenText } from "../i18n/text/navigationOpenText.js"
import { button } from "./button.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLButtonElement,
 *               import("./button.js").HTMLButtonElementProperties>[]} contents
 */
export function NavigationOpenButton(...contents) {
 return button({
  type: "button",
  title: navigationOpenText(),
  onclick: navigationToggle
 },
  NavigationIcon(),
  ...contents
 )
}