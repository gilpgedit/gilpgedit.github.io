import { Signal } from "../Signal/Signal.js"
import { ReadOnlyField } from "./ReadOnlyField.js"
import { ReadOnlyInput } from "./ReadOnlyInput.js"

/**
 * @param {{
 *   caption: string | Signal<string>,
 *   name: string | Signal<string>,
 *   type: string | Signal<string>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *  LiteGroupParameter<HTMLParagraphElement,
 *  {
 *    liteNode: HTMLParagraphElement,
 *    targetElement: HTMLInputElement,
 *   }>[]} contents
 */
export function ReadOnlyInputField({ caption, name, type }, ...contents) {
 return ReadOnlyField({
  caption,
  targetElement: ReadOnlyInput({ name, type })
 },
  ...contents
 )
}