import { empty_class } from "../const/empty_class.js"
import { row_class } from "../const/row_class.js"
import { noScript } from "../html/noScript.js"
import { small } from "../lite/small.js"
import { span } from "../lite/span.js"
import { stringOrEmpty } from "../stringOrEmpty.js"

/**
 * @param {import("../html/ListModel.js").ListModel<any, any> | undefined} value
 * @param {string} noSelectionText
 */
export function oneSelectionRenderer(value, noSelectionText) {
 if (value === undefined) {
  return small({ className: { [row_class]: true, [empty_class]: true } },
   noSelectionText
  )
 } else {
  return span({
   className: { [row_class]: true },
   innerHTML: noScript(stringOrEmpty(value.r))
  })
 }
}