import { Signal } from "../Signal/Signal.js"
import { fieldset } from "./fieldset.js"
import { legend } from "./legend.js"
import {
 executeLiteGroupFilterFunctions
} from "./util/executeLiteGroupFilterFunctions.js"
import {
 liteGroupFilter
} from "./util/liteGroupFilter.js"

/**
 * @template {HTMLElement} TargetElementType
 * @param {{
 *   legend: string | Signal<string>,
 *   targetElement:TargetElementType
 *  }} attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *  LiteGroupParameter<HTMLFieldSetElement,
 *  {
 *   liteNode: HTMLFieldSetElement;
 *   targetElement: TargetElementType;
 *  }>[]} contents
 */
export function FieldsetField(attributes, ...contents) {
 const targetElement = attributes.targetElement
 const liteNode = fieldset(
  legend(attributes.legend),
  targetElement,
  ...liteGroupFilter(contents)
 )
 return executeLiteGroupFilterFunctions({ liteNode, targetElement }, contents)
}