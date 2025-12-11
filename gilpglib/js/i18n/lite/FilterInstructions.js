import { li } from "../../lite/li.js"
import { p } from "../../lite/p.js"
import { FilterDisplayIcon } from "./FilterDisplayIcon.js"
import { ReadMoreIcon } from "./ReadMoreIcon.js"
import { SearchIcon } from "./SearchIcon.js"

export function FilterInstructions() {
 return [
  li(
   p(
    `Si quieres introducir un texto a buscar y el cuadro de texto no es visible,
     cliquea `, FilterDisplayIcon(), "."
   )
  ),
  li(p("Introduce el texto a buscar y cliquea ", SearchIcon(), ".")),
  li(
   p(
    "En caso de que quede informacion sin mostrar, aparece el botón ",
    ReadMoreIcon(), " para mostrar los registros faltantes."
   )
  ),
 ]
}