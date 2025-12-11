import { p } from "../../lite/p.js"
import { SearchIcon } from "./SearchIcon.js"

export function SearchInstructions() {
 return [
  p("Cliquea ", SearchIcon(), " para mostrar los registros del servidor."),
 ]
}