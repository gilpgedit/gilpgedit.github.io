import { filter_name } from "../const/filter_name.js"
import { elementTextWithAccessKey } from "../html/elementTextWithAccessKey.js"
import { setTiltleAndAccessKey } from "../html/setTiltleAndAccessKey.js"
import { filterAccessKey } from "../i18n/accessKey/filterAccessKey.js"
import { filterText } from "../i18n/text/filterText.js"
import { input } from "./input.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                      LiteElementParameter<HTMLInputElement,
 *                  import("./input.js").HTMLInputElementProperties>[]} contents
 */
export function FilterInput(...contents) {
 return input({
  type: "search",
  name: filter_name,
 },
  function () {
   const text = filterText()
   const accessKey = filterAccessKey()
   this.placeholder =
    elementTextWithAccessKey(this, text, accessKey)
   setTiltleAndAccessKey(this, text, accessKey)
  },
  ...contents
 )
}