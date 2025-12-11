import { editionField_class } from "../const/editionField_class.js"
import { addStyleContent } from "../html/addStyleContent.js"
import { setAccessKey } from "../html/setAccessKey.js"
import { Signal } from "../Signal/Signal.js"
import { b } from "./b.js"
import { label } from "./label.js"
import { p } from "./p.js"
import { small } from "./small.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import { liteGroupFilter } from "./util/liteGroupFilter.js"


addStyleContent(document.head, /* css */ `
 .${editionField_class} label >:not(b, span, small) {
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  justify-self: stretch;
  width: auto
 }
`)

/**
 * @template {HTMLElement} TargetType
 * @param {{
 *   caption?: string | Signal<string>,
 *   accessKey?: string | Signal<string>,
 *   targetElement: TargetType,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").LiteGroupParameter<
 *  HTMLParagraphElement,
 *  {
 *   liteNode: HTMLParagraphElement;
 *   targetElement: TargetType;
 * }>[]} contents
 */
export function EditionField({ caption, accessKey, targetElement }
 , ...contents) {

 const accessKeyElement = small({
  style: {
   cssText: /* css */ `
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    align-self: center
   `
  }
 })

 const liteNode = p({ className: { [editionField_class]: true } },
  label({
   nodeEffect: function () {
    if (accessKey instanceof Signal) {
     setAccessKey(accessKey.get(), this, accessKeyElement)
    }
   },
   style: {
    cssText: /* css */ `
     display: grid;
     gap: var(--groupGap);
     grid-template-columns: auto 1fr;
     grid-template-rows: auto auto;
    `
   }
  },
   function () {
    if (typeof accessKey === "string") {
     setAccessKey(accessKey, this, accessKeyElement)
    }
   },
   b({
    textContent: caption,
    style: {
     cssText: /* css */ `
     grid-column: 1 / span 1;
     grid-row: 1 / span 1;
     align-self: center
    `
    }
   }),
   accessKeyElement,
   targetElement,
  ),
  ...liteGroupFilter(contents)
 )

 return executeLiteGroupFilterFunctions({ liteNode, targetElement }, contents)

}