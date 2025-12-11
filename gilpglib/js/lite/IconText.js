import { icon_class } from "../const/icon_class.js"
import { iconText_class } from "../const/iconText_class.js"
import { selected_class } from "../const/selected_class.js"
import { text_class } from "../const/text_class.js"
import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"
import "./iconTextCss.js"
import { output } from "./output.js"
import { span } from "./span.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import { liteGroupFilter } from "./util/liteGroupFilter.js"

/**
 * @template {HTMLElement} IconType
 * @typedef {Object} IconTypeProperties
 * @property {boolean | Signal<boolean>} selected
 * @property {IconType} iconElement
 * @property {string | Signal<string>} text
 */
/**
 * @template {HTMLElement} IconType
 * @typedef {Object} IconTextGroup
 * @property {HTMLSpanElement} liteNode
 * @property {IconType} iconElement
 * @property {HTMLOutputElement} textElement
 */
/**
 * @template {HTMLElement} IconType
 * @param {IconTypeProperties<IconType>} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *      LiteGroupParameter<HTMLSpanElement,IconTextGroup<IconType>>[]} contents
 */
export function IconText({ selected, iconElement, text }, ...contents) {

 const textElement = output({ className: { [text_class]: true } }, text)

 const liteNode = span({
  className: {
   [iconText_class]: true,
   [selected_class]: selected
  },
 },
  _(iconElement, {
   className: {
    [selected_class]: selected,
    [icon_class]: true,
   }
  }),
  textElement,
  ...liteGroupFilter(contents))


 return executeLiteGroupFilterFunctions({ liteNode, iconElement, textElement },
  contents)

}