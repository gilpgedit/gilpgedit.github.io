import { ABSTRACT } from "../const/ABSTRACT.js"
import { header_attribute } from "../const/header_attribute.js"
import { name_attribute } from "../const/name_attribute.js"
import { noFilter_attribute } from "../const/noFilter_attribute.js"
import { prefetch_attribute } from "../const/prefetch_attribute.js"
import { reading_class } from "../const/reading_class.js"
import { required_attribute } from "../const/required_attribute.js"
import { errorDisplay } from "../di/errorDisplay.js"
import { booleanAttributeNew } from "../di/html/booleanAttributeNew.js"
import { stringAttributeNew } from "../di/html/stringAttributeNew.js"
import { stateNew } from "../di/stateNew.js"
import { dispatchInputEvent } from "../html/dispatchInputEvent.js"
import { DropDownIcon } from "../i18n/lite/DropDownIcon.js"
import { FilterInstructions } from "../i18n/lite/FilterInstructions.js"
import { NavigationCloseIcon } from "../i18n/lite/NavigationCloseIcon.js"
import { SearchIcon } from "../i18n/lite/SearchIcon.js"
import { UnselectAllIcon } from "../i18n/lite/UnselectAllIcon.js"
import { clearSelectionText } from "../i18n/text/clearSelectionText.js"
import { dialogCloseText } from "../i18n/text/dialogCloseText.js"
import { requiredText } from "../i18n/text/requiredText.js"
import { searchText } from "../i18n/text/searchText.js"
import { BasicToolbar } from "../lite/BasicToolbar.js"
import { button } from "../lite/button.js"
import { dialog } from "../lite/dialog.js"
import { div } from "../lite/div.js"
import { FilterInput } from "../lite/FilterInput.js"
import { form } from "../lite/form.js"
import { h2 } from "../lite/h2.js"
import { header } from "../lite/header.js"
import { MATERIAL_SYMBOL_CSS } from "../lite/MaterialSymbol.js"
import { output } from "../lite/output.js"
import { p } from "../lite/p.js"
import { ReadMoreButton } from "../lite/ReadMoreButton.js"
import { section } from "../lite/section.js"
import { slot } from "../lite/slot.js"
import { style } from "../lite/style.js"
import { ul } from "../lite/ul.js"
import { PagingDialogMediator } from "../mediator/PagingDialogMediator.js"
import { State } from "../Signal/State.js"

/**
 * @template IdType
 * @template SortType
 * @template ValueType
 * @template InternalValueType
 * @abstract
 */
export class SelectElement extends HTMLElement {

 /**
  * @protected
  * @param {ValueType} _value
  */
 set value(_value) { throw new Error(ABSTRACT) }

 /**
  * @protected
  */
 updateAppearance() { throw new Error(ABSTRACT) }

 /**
  * @protected
  */
 async performFormValues() { throw new Error(ABSTRACT) }

 /**
  * @protected
  * @param {InternalValueType | undefined} _value
  * @returns {ValueType}
  */
 identity(_value) { throw new Error(ABSTRACT) }

 /**
  * @returns {PagingDialogMediator<IdType, SortType, InternalValueType>}
  */
 pagingDialogMediatorNew() { throw new Error(ABSTRACT) }

 /**
  * @returns {boolean}
  */
 hasSelection() { throw new Error(ABSTRACT) }

 /**
  * @private
  */
 _getStyle() {
  return MATERIAL_SYMBOL_CSS + /* css */`

    :host {
     display: flex;
     gap: 0.25rem;
     border: 1.5px solid;
     cursor: pointer;
     border-radius: var(--radius, 0.4em);
    }

    :host([hidden]) {
     display: none;
    }

    :host(:focus) {
     outline: 1px solid var(--focusColor, black);
    }

    :host(:invalid) {
     border-color: var(--invalidBorderColor);
    }

    :host(:invalid:focus),
    :host(:invalid:focus-visible) {
     border-width: 2.5px;
     outline-color: var(--invalidBorderColor);
    }

    div {
     flex: 1 1 0;
    }

    .icon {
     flex: 0 0;
    }

    ::slotted(.empty) {
     font-style: oblique;
    }

    ::slotted(.empty),
    ::slotted(.row) {
     display: block;
     margin-top: 0.5em;
     margin-bottom: 0.5em;
     padding-left: var(--groupGap, 0.5rem);
     padding-right: var(--groupGap, 0.5rem);
    }

  `
 }

 /**
  * @private
  */
 _getContent() {
  return [style(this._getStyle()), div(slot()), DropDownIcon()]
 }

 /**
  * @param {State<string>} headerText
  * @param {State<boolean>} filterHidden
  * @param {PagingDialogMediator<IdType, SortType, InternalValueType>} mediator
  */
 _PagingDialog(headerText, filterHidden, mediator) {
  return dialog({ style: { padding: "0" } },
   form({
    style: { position: "relative" },
    onsubmit: event => mediator.firstPageSubmit(event)
   },
    function () { mediator.form = this },
    BasicToolbar({ style: { position: "sticky", top: "0" } },
     button({
      style: { marginRight: "auto" },
      type: "button",
      title: clearSelectionText(),
      onclick: mediator.unselectAll
     },
      UnselectAllIcon()),
     FilterInput({ hidden: filterHidden }),
     button({
      type: "button",
      title: searchText(),
      onclick: mediator.firstPage,
     },
      SearchIcon(),
     ),
     ReadMoreButton({
      hidden: mediator.readMoreHidden,
      onclick: mediator.nextPage
     }),
     button({
      type: "button",
      title: dialogCloseText(),
      autofocus: true,
      onclick: mediator.close
     },
      NavigationCloseIcon()
     )
    ),
    header({ style: { paddingInline: "1rem" } },
     h2({ textContent: headerText })
    ),
    p({ style: { paddingInline: "1rem" } },
     output({ textContent: mediator.recordCount })
    ),
    section({
     className: { [reading_class]: true },
     style: { paddingInline: "1rem" }
    },
     ul(function () { mediator.list = this }, ...FilterInstructions())
    )
   )
  )
 }

 constructor() {

  super()

  const shadow = this.attachShadow({ mode: "open" })
  shadow.append(...this._getContent())

  this._displayDialog = this._displayDialog.bind(this)
  this.valueDisplay = this.valueDisplay.bind(this)
  this.spaceListen = this._spaceListen.bind(this)

  /**
   * @private
   * @readonly
   */
  this._name = stringAttributeNew(this, name_attribute)
  /**
   * @private
   * @readonly
   */
  this._required = booleanAttributeNew(this, required_attribute)
  /**
   * @private
   * @readonly
   */
  this._noFilter = booleanAttributeNew(this, noFilter_attribute)
  /**
   * @protected
   */
  this._filterHiddenState = stateNew(false)
  /**
   * @private
   * @readonly
   */
  this._prefetch = booleanAttributeNew(this, prefetch_attribute)
  /**
   * @private
   * @readonly
   */
  this._header = stringAttributeNew(this, header_attribute)
  /**
   * @protected
   */
  this._headerText = stateNew("")
  /**
   * @protected
   * @type {InternalValueType | undefined}
   */
  this._internalValue = undefined
  /**
   * @protected
   */
  this._customValidity = ""
  /**
   * @protected
   * @readonly
   */
  this._internals = this.attachInternals()
  this._internals.role = "select"
 }

 connectedCallback() {
  this.tabIndex = 0
  this.addListeners()
  if (this._internalValue === undefined) {
   this.valueDisplay()
  }
 }

 disconnectedCallback() {
  this.removeListeners()
 }

 /**
  * @param {string} attributeName
  */
 attributeChangedCallback(attributeName) {
  switch (attributeName) {
   case required_attribute:
    this.internalCheckValidity()
    break
   case noFilter_attribute:
    this._filterHiddenState.set(this.noFilter)
    break
   case header_attribute:
    this._headerText.set(this.header)
    break
  }
 }

 get name() {
  return this._name.get()
 }

 set name(name) {
  this._name.set(name)
 }

 get noFilter() {
  return this._noFilter.get()
 }

 set noFilter(noFilter) {
  this._noFilter.set(noFilter)
 }

 get prefetch() {
  return this._prefetch.get()
 }

 set prefetch(prefetch) {
  this._prefetch.set(prefetch)
 }

 get header() {
  return this._header.get()
 }

 set header(header) {
  this._header.set(header)
 }

 get required() {
  return this._required.get()
 }

 set required(required) {
  this._required.set(required)
 }

 get form() {
  return this._internals.form
 }

 get willValidate() {
  return this._internals.willValidate
 }

 /**
  * @param {string} message
  */
 setCustomValidity(message) {
  this._customValidity = message
  this.internalCheckValidity()
 }

 /**
  * @returns {ValidityState}
  */
 get validity() {
  return this._internals.validity
 }

 checkValidity() {
  return this._internals.checkValidity()
 }

 reportValidity() {
  return this._internals.reportValidity()
 }

 get validationMessage() {
  return this._internals.validationMessage
 }

 /**
  * @protected
  */
 async valueDisplay() {
  try {
   await this.performFormValues()
   this._customValidity = ""
   this.internalCheckValidity()
   this.updateAppearance()
  } catch (error) {
   this.updateAppearance()
   errorDisplay(error)
  }
 }

 /**
  * @protected
  */
 addListeners() {
  this.addEventListener("click", this._displayDialog)
  this.addEventListener("keydown", this._spaceListen)
 }

 /**
  * @protected
  */
 removeListeners() {
  this.removeEventListener("click", this._displayDialog)
  this.removeEventListener("keydown", this._spaceListen)
 }

 internalCheckValidity() {
  if (this._customValidity !== "") {
   this._internals.setValidity({ customError: true }, this._customValidity)
   return false
  } else if (this.required && !this.value) {
   this._internals.setValidity({ valueMissing: true }, requiredText())
   return false
  } else {
   this._internals.setValidity({})
   return true
  }
 }

 /**
  * @private
  * @param {KeyboardEvent} event
  */
 _spaceListen(event) {
  if (event.key === " ") {
   this._displayDialog()
  }
 }

 /**
  * @private
  */
 async _displayDialog() {
  if (!this._pagingDialogMediator || !this._dialog) {
   /**
    * @private
    */
   this._pagingDialogMediator = this.pagingDialogMediatorNew()
   /**
    * @private
    */
   this._dialog = document.body.appendChild(this._PagingDialog(this._headerText,
    this._filterHiddenState, this._pagingDialogMediator))
  }
  const { value: internalValue, modified } = await this._pagingDialogMediator
   .display(this._dialog, this._internalValue, this.prefetch, this.header)
  if (modified) {
   this._internalValue = internalValue
   this.value = this.identity(internalValue)
   dispatchInputEvent(this)
  }
  this.focus()
 }
}