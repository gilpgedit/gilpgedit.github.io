import { hidden_class } from "../const/hidden_class.js"
import { hidden_tag } from "../const/hidden_tag.js"
import { small_only_class } from "../const/small_only_class.js"
import { toolbar_class } from "../const/toolbar_class.js"
import { addStyleContent } from "../html/addStyleContent.js"
import { menu } from "./menu.js"

addStyleContent(document.head, /* css */ `
   
 .${toolbar_class} {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: var(--groupGap);
  margin: 0;
  padding: 0 var(--groupGap) 0 var(--groupGap);
  background-color: var(--backgroundColor);
 }

 .${toolbar_class}[${hidden_tag}] {
  display: none;
 }

 .${toolbar_class} button {
  font-size: inherit;
 }
 
  .${toolbar_class} output {
   flex: 1 1 0;
   white-space: nowrap;
   text-overflow: ellipsis;
   overflow: hidden;
  }
 
  .${toolbar_class} input {
   flex: 1 1 0;
   min-width: 5rem;
  }
 
 @media screen and (max-width: 599px) {

  .${toolbar_class} .${hidden_class} {
   display: none;
  }

 }

 @media screen and (min-width: 600px) {

  .${toolbar_class} .${small_only_class} {
   display: none;
  }

 }
`)

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLMenuElement,
 *                           import("./parameter/LiteElementProperties.js").
 *                          LiteElementProperties<HTMLMenuElement>>[]} contents
 */
export function BasicToolbar(...contents) {
 return menu({ className: { [toolbar_class]: true } }, ...contents)
}