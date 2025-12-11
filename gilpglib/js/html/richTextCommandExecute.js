import { command_data_attribute } from "../const/command_data_attribute.js"

/**
 * @param {HTMLElement} richText
 * @param {Event} event
 */
export function richTextCommandExecute(richText, event) {
 const target = event.target
 if (target instanceof HTMLSelectElement) {
  execute(richText, target.dataset[command_data_attribute], target.value)
  target.selectedIndex = 0
 } else {
  const element =
   target instanceof HTMLElement ? target.closest("button") : null
  if (element instanceof HTMLButtonElement) {
   execute(richText, element.dataset[command_data_attribute])
  }
 }
}


/**
 * @param {HTMLElement} richText
 * @param {string | undefined} command
 * @param {string} [argument]
 */
function execute(richText, command, argument) {
 richText.focus()
 if (command) {
  if (command === "createLink") {
   const selection = getSelection()
   if (selection) {
    document.execCommand(command, false, selection.toString())
   }
  } else {
   document.execCommand(command, false, argument)
  }
 }
}