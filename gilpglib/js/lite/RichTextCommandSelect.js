import { command_data_attribute } from "../const/command_data_attribute.js"
import { richTextCommandExecute } from "../html/richTextCommandExecute.js"
import { select } from "./select.js"

/**
 * @param {{richText: HTMLElement, command: string, title: string}} _properties
 * @param {HTMLOptionElement[]} options
 */
export function RichTextCommandSelect({ richText, command, title }
 , ...options) {
 return select(
  {
   title, dataset: { [command_data_attribute]: command },
   style: { width: "auto" },
   onchange: richTextCommandExecute.bind(null, richText)
  },
  ...options
 )
}