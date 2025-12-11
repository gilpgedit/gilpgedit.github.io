import { hidden_tag } from "../const/hidden_tag.js"
import { material_symbol_class } from "../const/material_symbol_class.js"
import { selected_class } from "../const/selected_class.js"
import { addStyleContent } from "../html/addStyleContent.js"
import { css } from "../html/css.js"
import { span } from "./span.js"

export const MATERIAL_SYMBOL_CSS = css`
   
 .${material_symbol_class} {
   display: inline-block;
   box-sizing: border-box;
   vertical-align: middle;
   font-family: 'Material Symbols Outlined';
   font-style: normal;
   font-size: var(--iconSize);
   width: 1em;
   height: 1em;
   overflow: hidden;
   line-height: 1;
   text-transform: none;
   letter-spacing: normal;
   word-wrap: normal;
   white-space: nowrap;
   direction: ltr;
 }

  .${material_symbol_class}[${hidden_tag}] {
   display: none;
  }

  .${material_symbol_class}.${selected_class} {
   font-weight: bold;
   font-variation-settings: 'FILL'1, 'wght'700, 'GRAD'0, 'opsz'48;
  }

 `.cssText
addStyleContent(document.head, MATERIAL_SYMBOL_CSS)

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLSpanElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                          LiteElementProperties<HTMLSpanElement>>[]} contents
 */
export function MaterialSymbol(...contents) {
 return span({ className: { [material_symbol_class]: true } }, ...contents)
}