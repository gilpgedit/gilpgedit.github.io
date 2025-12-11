import { li } from "../../lite/li.js"
import { p } from "../../lite/p.js"
import { ReadMoreIcon } from "./ReadMoreIcon.js"
import { SearchIcon } from "./SearchIcon.js"

export function PagingInstructions() {
 return [
  li(p("Para mostrar los registros cliquea ", SearchIcon(), ".")),
  li(
   p(
    "En caso de que quede informacion sin mostrar, aparece el botón ",
    ReadMoreIcon(), " para mostrar los registros faltantes."
   )
  ),
 ]
}