import { observeAttributes } from "../html/observeAttributes.js"
import { observeConnection } from "../html/observeConnection.js"
import { textArea } from "./textArea.js"

/**
 * Provides special properties and methods for manipulating the layout and presentation of <textarea> elements.
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement)
 * @param {import("./parameter/LiteElementParameter.js").
 *                        LiteElementParameter<HTMLTextAreaElement,
 *           import("./textArea.js").HTMLTextAreaElementProperties>[]} contents
 */
export function ResizeTextArea(...contents) {
 return textArea(
  ...contents,
  function () {
   const textArea = this
   textArea.style.resize = "none"
   if (CSS.supports("fornSizing", "content")) {
    textArea.style["fornSizing"] = "content"
   } else {
    observeConnection({
     node: textArea,
     connectedCallback: () => {
      resize()
      textArea.addEventListener("input", resize)
      addEventListener("resize", resize)
     },
     disconnectedCallback: () => {
      textArea.removeEventListener("input", resize)
      removeEventListener("resize", resize)
     }
    })
    observeAttributes(textArea, ["value", "wrap"], resize)
    queueMicrotask(() => resize())
   }

   function resize() {
    if (textArea.wrap === "off") {
     const rows = textArea.value.split(/\r|\r\n|\n/).length
     textArea.rows = rows > 0 ? rows + 2 : 1
    } else {
     textArea.style.height = "auto"
     textArea.style.height = `${textArea.scrollHeight}px`
     textArea.style.overflowY = "hidden"
    }
   }

  }
 )
}