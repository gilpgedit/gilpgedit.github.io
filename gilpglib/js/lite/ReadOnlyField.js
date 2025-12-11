import { readOnlyField_class } from "../const/readOnlyField_class.js"
import { addStyleContent } from "../html/addStyleContent.js"
import { Signal } from "../Signal/Signal.js"
import { b } from "./b.js"
import { p } from "./p.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import { liteGroupFilter } from "./util/liteGroupFilter.js"

addStyleContent(document.head, /* css */ `

 .${readOnlyField_class} {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-block: 1rem;
  gap: var(--groupGap);
 }

 .${readOnlyField_class}[hidden] {
  display: none;
 }

 .${readOnlyField_class} >:not(b) {
  box-sizing: border-box;
  width: 100%
 }

`)

/**
 * @template {HTMLElement} TargetType
 * @param {{
 *   caption: string | Signal<string>,
 *   targetElement: TargetType,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").LiteGroupParameter<
 *  HTMLParagraphElement,
 *  {
 *   liteNode: HTMLParagraphElement;
 *   targetElement: TargetType;
 * }>[]} contents
 */
export function ReadOnlyField({ caption, targetElement }, ...contents) {
 const liteNode = p({ className: { [readOnlyField_class]: true } },
  b({ textContent: caption }),
  targetElement,
  ...liteGroupFilter(contents)
 )
 return executeLiteGroupFilterFunctions({ liteNode, targetElement }, contents)
}