import { checkbox_type } from "../const/checkbox_type.js"
import { setAccessKey } from "../html/setAccessKey.js"
import { Signal } from "../Signal/Signal.js"
import { input } from "./input.js"
import { label } from "./label.js"
import { p } from "./p.js"
import { small } from "./small.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import { liteGroupFilter } from "./util/liteGroupFilter.js"

/**
 * @param {{
 *   name: string | Signal<string>,
 *   caption: string | Signal<string>,
 *   accessKey?: string | Signal<string>
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").LiteGroupParameter<
 *  HTMLParagraphElement,
 *  {
 *   liteNode: HTMLParagraphElement;
 *   targetElement: HTMLInputElement;
 *  }>[]} contents
 */
export function CheckField({ caption, accessKey, name }, ...contents) {

 const accessKeyElement = small()

 const targetElement = input({
  name,
  type: checkbox_type,
 })
 const liteNode = p(
  label({
   nodeEffect: function () {
    if (accessKey instanceof Signal) {
     setAccessKey(accessKey.get(), this, accessKeyElement)
    }
   },
  },
   function () {
    if (typeof accessKey === "string") {
     setAccessKey(accessKey, this, accessKeyElement)
    }
   },
   targetElement,
   caption,
   accessKeyElement
  ),
  ...liteGroupFilter(contents)
 )
 return executeLiteGroupFilterFunctions({ liteNode, targetElement }, contents)
}