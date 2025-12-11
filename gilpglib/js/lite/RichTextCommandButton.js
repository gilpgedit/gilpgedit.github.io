import { command_data_attribute } from "../const/command_data_attribute.js"
import { richTextCommandExecute } from "../html/richTextCommandExecute.js"
import { button } from "./button.js"

/**
 * @param {{richText: HTMLElement, command: string, title: string}} _properties
 * @param {import("./parameter/LiteElementParameter.js").
 *      LiteElementParameter<HTMLButtonElement, import("./button.js").
 *                                            HTMLButtonElementProperties>[]
 *                                                                   } contents
 */
export function RichTextCommandButton({ richText, title, command }
 , ...contents) {
 return button(
  {
   type: "button",
   title,
   dataset: { [command_data_attribute]: command },
   onclick: richTextCommandExecute.bind(null, richText)
  },
  ...contents
 )
}