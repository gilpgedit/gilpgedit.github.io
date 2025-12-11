import { empty_class } from "../const/empty_class.js"
import { row_class } from "../const/row_class.js"
import { noScript } from "../html/noScript.js"
import { small } from "../lite/small.js"
import { span } from "../lite/span.js"
import { stringOrEmpty } from "../stringOrEmpty.js"

/**
 * @template IdType
 * @param {import("../html/ListModel.js").
 *                                  ListModel<IdType, any>[] | undefined} value
 * @param {string} noSelectionText
 */
export function manySelectionRenderer(value, noSelectionText) {
 let render = []
 const len = value ? value.length : 0
 if (len && value) {
  for (let i = 0; i < len; i++) {
   render.push(
    span({
     className: { [row_class]: true },
     innerHTML: noScript(stringOrEmpty(value[i].r))
    }
    )
   )
  }
  return render
 } else {
  return [
   small({ className: { [row_class]: true, [empty_class]: true } },
    noSelectionText
   )
  ]
 }
}