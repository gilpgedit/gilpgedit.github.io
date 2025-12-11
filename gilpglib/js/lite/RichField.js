import { RichText, RichTextElement } from "../custom/rich-text.js"
import { Signal } from "../Signal/Signal.js"
import { FieldsetField } from "./FieldsetField.js"

/**
 * @param {{
 *   name: string | Signal<string>,
 *   legend: string | Signal<string>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *  LiteGroupParameter<HTMLFieldSetElement,
 *  {
 *   liteNode: HTMLFieldSetElement;
 *   targetElement: RichTextElement;
 *  }>[]} contents
 */
export function RichField({ legend, name }, ...contents) {
 return FieldsetField({
  legend, targetElement: RichText({ dataset: { name } })
 },
  ...contents)
}