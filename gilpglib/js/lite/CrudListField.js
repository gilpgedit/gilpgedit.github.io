import {
 CrudList, CrudListElement
} from "../custom/crud-list.js"
import { Signal } from "../Signal/Signal.js"
import { FieldsetField } from "./FieldsetField.js"

/**
 * @template {HTMLElement} ElementType
 * @template ValueType
 * @param {{
 *   legend: string | Signal<string>,
 *   name: string | Signal<string>,
 *   content: () => ElementType,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *                                      LiteGroupParameter<HTMLFieldSetElement,
 *  {
 *   liteNode: HTMLFieldSetElement;
 *   targetElement: CrudListElement<ElementType,ValueType>
 *  }>[]} contents
 */
export function CrudListField({ legend, name, content }, ...contents) {
 return FieldsetField({
  legend,
  targetElement: CrudList({ name, content })
 },
  ...contents)
}