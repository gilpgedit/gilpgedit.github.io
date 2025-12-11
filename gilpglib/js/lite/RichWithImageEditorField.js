import {
 RichWithImageEditor, RichWithImageEditorElement
} from "../../../src/js/custom/rich-with-image-editor.js"
import { Signal } from "../Signal/Signal.js"
import { FieldsetField } from "./FieldsetField.js"

/**
 * @param {{
 *   name?: string | Signal<string>,
 *   legend: string | Signal<string>,
 *   required?: boolean | Signal<boolean>,
 *  }} _attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *  LiteGroupParameter<HTMLFieldSetElement,
 *  {
 *   liteNode: HTMLFieldSetElement;
 *   targetElement: RichWithImageEditorElement;
 *  }>[]} contents
 */
export function RichWithImageEditorField(
 { legend, name, required }, ...contents
) {
 return FieldsetField({
  legend, targetElement: RichWithImageEditor({ name, required })
 },
  ...contents
 )
}