import { Signal } from "../Signal/Signal.js"
import { output } from "./output.js"
import { ReadOnlyField } from "./ReadOnlyField.js"

/**
 * @param {{
 *   caption: string | Signal<string>,
 *   name?: string | Signal<string>,
 *   value?: string | Signal<string>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *  LiteGroupParameter<HTMLParagraphElement,
 *  {
 *    liteNode: HTMLParagraphElement,
 *    targetElement: HTMLOutputElement,
 *   }>[]} contents
 */
export function OutputField({ caption, name, value }, ...contents) {
 return ReadOnlyField({
  caption, targetElement: output({ name, value })
 },
  ...contents
 )
}