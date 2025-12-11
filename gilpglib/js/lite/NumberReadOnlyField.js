import { Signal } from "../Signal/Signal.js"
import { EditionField } from "./EditionField.js"
import {
 NumberReadOnlyInput
} from "./NumberReadOnlyInput.js"

/**
 * @param {{
 *   caption: string | Signal<string>,
 *   name?: string | Signal<string>,
 *   step?: string | Signal<string>,
 *   valueAsNumber?: number | Signal<number>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *  LiteGroupParameter<HTMLParagraphElement,
 *  {
 *    liteNode: HTMLParagraphElement,
 *    targetElement: HTMLInputElement,
 *   }>[]} contents
 */
export function NumberReadOnlyField(
 { caption, name, step, valueAsNumber }, ...contents
) {
 return EditionField({
  caption,
  targetElement: NumberReadOnlyInput({ name, step, valueAsNumber })
 },
  ...contents
 )
}