import { RichEditor, RichEditorElement } from "../custom/rich-editor.js"
import { Signal } from "../Signal/Signal.js"
import { BasicRichTextCommands } from "./BasicRichTextCommands.js"
import { fieldset } from "./fieldset.js"
import { legend } from "./legend.js"
import { executeLiteGroupFilterFunctions } from "./util/executeLiteGroupFilterFunctions.js"
import { liteGroupFilter } from "./util/liteGroupFilter.js"

/**
 * @param {{
 *   legend: string | Signal<string>,
 *  }} attributes
 * @param {import("./parameter/LiteGroupParameter.js").
 *  LiteGroupParameter<HTMLFieldSetElement,
 *  {
 *   liteNode: HTMLFieldSetElement;
 *   commands: HTMLDivElement;
 *   targetElement: RichEditorElement;
 *  }>[]} contents
 */
export function RichEditorField(attributes, ...contents) {
 const [commands, targetElement] = BasicRichTextCommands(RichEditor())
 const liteNode = fieldset(
  legend(attributes.legend),
  commands,
  targetElement,
  ...liteGroupFilter(contents)
 )
 return executeLiteGroupFilterFunctions({
  liteNode, commands, targetElement
 },
  contents)
}