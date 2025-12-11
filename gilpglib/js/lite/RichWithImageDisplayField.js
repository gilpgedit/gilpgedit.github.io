import {
 RichWithImage, RichWithImageElement
} from "../../../src/js/custom/rich-with-image.js"
import { Signal } from "../Signal/Signal.js"
import { FieldsetField } from "./FieldsetField.js"

/**
 * @param {{
 *   legend: string | Signal<string>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *  LiteGroupParameter<HTMLFieldSetElement,
 *  {
 *   liteNode: HTMLFieldSetElement;
 *   targetElement: RichWithImageElement;
 *  }>[]} contents
 */
export function RichWithImageDisplayField({ legend }, ...contents) {
 return FieldsetField({ legend, targetElement: RichWithImage() },
  ...contents)
}