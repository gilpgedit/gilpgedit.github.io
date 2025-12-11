import { SearchIcon } from "../i18n/lite/SearchIcon.js"
import { searchText } from "../i18n/text/searchText.js"
import { button } from "./button.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *               LiteElementParameter<HTMLButtonElement,
 *               import("./button.js").HTMLButtonElementProperties>[]} contents
 */
export function SearchButton(...contents) {
 return button({
  type: "submit",
  title: searchText(),
 },
  SearchIcon(),
  ...contents
 )
}