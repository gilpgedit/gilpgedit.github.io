import { hidden_tag } from "../const/hidden_tag.js"
import { icon_class } from "../const/icon_class.js"
import { iconText_class } from "../const/iconText_class.js"
import { text_class } from "../const/text_class.js"
import { addStyleContent } from "../html/addStyleContent.js"

addStyleContent(document.head, /* css */ `

 .${iconText_class} {
  display: inline-flex;
  gap: var(--groupGap);
  align-items: center;
 }

 .${iconText_class}[${hidden_tag}] {
  display: none;
 }

 .${iconText_class} .${icon_class} {
  flex: 0 0 auto;
 }

 .${iconText_class} .${text_class} {
  flex: 0 1 auto;
  overflow-wrap: anywhere;
 }

 a .${iconText_class} .${text_class} {
  text-decoration: underline;
 }

 @media screen and (max-width: 299px) {

  .${iconText_class} .${icon_class} {
   display: none;
  }

 }

`)
