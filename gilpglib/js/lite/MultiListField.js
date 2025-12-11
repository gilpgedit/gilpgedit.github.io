import {
 Multi, MultiElement
} from "../custom/multi-element.js"
import { addStyleContent } from "../html/addStyleContent.js"
import { Signal } from "../Signal/Signal.js"
import { FieldsetField } from "./FieldsetField.js"

addStyleContent(document.head, /* css */`
 .multiFiles ul { list-style-type: none }
`)

/**
 * @template {HTMLElement} ElementType
 * @template ValueType
 * @param {{
 *   legend: string | Signal<string>,
 *   name: string | Signal<string>,
 *   content: () => ElementType,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *  LiteGroupParameter<HTMLFieldSetElement,
 *  {
 *   liteNode: HTMLFieldSetElement;
 *   targetElement: MultiElement<ElementType, ValueType>
 *  }>[]} contents
 */
export function MultiListField({ legend, name, content }, ...contents) {
 return FieldsetField({
  legend,
  targetElement: Multi({
   className: { multiFiles: true },
   name,
   content
  })
 },
  ...contents)
}