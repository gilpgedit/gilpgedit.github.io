import { filter_name } from "../const/filter_name.js"
import { hidden_class } from "../const/hidden_class.js"
import { small_only_class } from "../const/small_only_class.js"
import { computedNew } from "../di/computedNew.js"
import { stateNew } from "../di/stateNew.js"
import { Signal } from "../Signal/Signal.js"
import { _ } from "./_.js"
import { FilterDisplayButton } from "./FilterDisplayButton.js"
import { FilterHideButton } from "./FilterHideButton.js"
import { FilterInput } from "./FilterInput.js"
import { NavigationToolbarGroup } from "./NavigationToolbarGroup.js"
import { ReadMoreButton } from "./ReadMoreButton.js"
import { SearchButton } from "./SearchButton.js"

/**
 * @param {boolean | Signal<boolean>} readMoreHidden
 * @param {(this: HTMLButtonElement, ev: MouseEvent) => any} readMoreListener
 * @param {string | Signal<string>} header
 * @param {import("./parameter/LiteGroupParameter.js").
 *   LiteGroupParameter<HTMLMenuElement,
 *  {
 *   liteNode: HTMLMenuElement;
 *   navigationOpenButton: HTMLButtonElement;
 *   headerOutput: HTMLOutputElement;
 *   filterHideButton: HTMLButtonElement;
 *   filterInput: HTMLInputElement;
 *   filterDisplayButton: HTMLButtonElement;
 *   searchButton: HTMLButtonElement;
 *   readMoreButton: HTMLButtonElement;
 *  }>[]} contents
 */
export function NavigationFilterToolbarGroup(readMoreHidden, readMoreListener
 , header, contents) {

 const filterExpanded = stateNew(false)

 const filterHideButton = FilterHideButton({
  className: { [hidden_class]: true, [small_only_class]: true },
  onclick: () => filterExpanded.set(false),
  nodeEffect: function () {
   const filterHidden = !filterExpanded.get()
   this.disabled = filterHidden
   this.classList.toggle(hidden_class, filterHidden)
  }
 })

 const filterInput = FilterInput({
  name: filter_name,
  className: { [hidden_class]: computedNew(() => !filterExpanded.get()) },
 })

 const filterDisplayButton = FilterDisplayButton({
  className: {
   [small_only_class]: true,
   [hidden_class]: filterExpanded
  },
  onclick: () => filterExpanded.set(true),
  disabled: filterExpanded,
 })

 const searchButton = SearchButton()

 const readMoreButton = ReadMoreButton({
  hidden: readMoreHidden,
  onclick: readMoreListener
 })

 const elements = NavigationToolbarGroup(
  header,
  [
   toolbarGroup => {
    _(elements.headerOutput, { className: { [hidden_class]: filterExpanded } })
    _(toolbarGroup.liteNode,
     {
      connectedCallback: () => addEventListener("resize", _filterClear),
      disconnectedCallback: () => removeEventListener("resize", _filterClear)
     }
    )
   },
   filterHideButton,
   filterInput,
   filterDisplayButton,
   searchButton,
   readMoreButton,
   ...contents,
  ]
 )

 return {
  ...elements,
  filterHideButton,
  filterInput,
  filterDisplayButton,
  searchButton,
  readMoreButton
 }

 function _filterClear() {
  filterInput.value = ""
 }

}