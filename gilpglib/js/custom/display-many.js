import { assertNotNullOrUndefined } from "../assertNotNullOrUndefined.js"
import { name_attribute } from "../const/name_attribute.js"
import { errorDisplay } from "../di/errorDisplay.js"
import { stringAttributeNew } from "../di/html/stringAttributeNew.js"
import {
 badElementTypeTemplate
} from "../i18n/template/badElementTypeTemplate.js"
import {
 getListModelsFunctionMissingText
} from "../i18n/text/getListModelsFunctionMissingText.js"
import {
 identityFunctionMissingText
} from "../i18n/text/identityFunctionMissingText.js"
import { noSelectionText } from "../i18n/text/noSelectionText.js"
import {
 sortFunctionMissingText
} from "../i18n/text/sortFunctionMissingText.js"
import { _ } from "../lite/_.js"
import { MATERIAL_SYMBOL_CSS } from "../lite/MaterialSymbol.js"
import { slot } from "../lite/slot.js"
import { style } from "../lite/style.js"
import { Signal } from "../Signal/Signal.js"
import { manySelectionRenderer } from "./manySelectionRenderer.js"

export const display_many_tag = "display-many"

/**
 * @template SortType
 * @typedef {Object} DisplayManyElementOnly
 * @property {string | Signal<string>} [name]
 * @property {string[] | Signal<string[]>} [value]
 * @property {(value: string[]) => Promise<import('../html/ListModel.js').
 *                                               ListModel<any, SortType>[]> |
 *     Signal<(value: string[]) => Promise<import('../html/ListModel.js').
 *                                               ListModel<any, SortType>[]>>
 *                                                      } getListModelsFunction
 * @property {import('../IdentityFunction.js').IdentityFunction<string,
 *                  import('../html/ListModel.js').ListModel<any, SortType>> |
 *     Signal<import('../IdentityFunction.js').IdentityFunction<string,
 *                  import('../html/ListModel.js').ListModel<any, SortType>>>
 *                                                           } identityFunction
 * @property {import('../SortFunction.js').
 *   SortFunction<import('../html/ListModel.js').ListModel<any, SortType>> |
 *                                       Signal<import('../SortFunction.js').
 *      SortFunction<import('../html/ListModel.js').ListModel<any, SortType>>>
 *                                                               } sortFunction
 */
/**
 * @template SortType
 * @typedef {import("../lite/parameter/LiteElementProperties.js").
 *   LiteElementProperties<DisplayManyElement> &
 *               DisplayManyElementOnly<SortType>} DisplayManyElementProperties
 */
/**
 * @template SortType
 * @param {import("../lite/parameter/LiteNoContentElementParameter.js").
 *                        LiteNoContentElementParameter<DisplayManyElement,
 *                          DisplayManyElementProperties<SortType>>[]} contents
 */
export function DisplayMany(...contents) {
 return _(new DisplayManyElement(), ...contents)
}

/**
 * @template SortType
 */
export class DisplayManyElement extends HTMLElement {

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof DisplayManyElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(display_many_tag))
  }
 }

 /**
  * @private
  */
 _getStyle() {
  return MATERIAL_SYMBOL_CSS + /* css */`

    :host {
     display: block;
     border: 1.5px solid;
     border-radius: var(--radius, 0.4em);
    }

    :host([hidden]) {
     display: none;
    }

    ::slotted(.empty) {
     font-style: oblique;
    }

    ::slotted(.empty),
    ::slotted(.row) {
     display: block;
     margin-top: 0.5em;
     margin-bottom: 0.5em;
     padding-left: var(--gap, 0.5rem);
     padding-right: var(--gap, 0.5rem);
    }

  `
 }

 /**
  * @private
  */
 _getContent() {
  return [style(this._getStyle()), slot()]
 }

 constructor() {
  super()
  const shadow = this.attachShadow({ mode: "open" })
  shadow.append(...this._getContent())
  /**
   * @private
   * @type {string[]}
   */
  this._value = []
  /**
   * @private
   * @readonly
   */
  this._name = stringAttributeNew(this, name_attribute)
  /**
   * @private
   * @type {import("../html/ListModel.js").
   *                                    ListModel<any, SortType>[] | undefined}
   */
  this._internalValue = undefined
 }

 connectedCallback() {
  if (this._internalValue === undefined) {
   this._valueDisplay()
  }
 }

 get name() {
  return this._name.get()
 }

 set name(name) {
  this._name.set(name)
 }

 get value() {
  return this._value
 }

 set value(value) {
  this._value = value
  this._valueDisplay()
 }

 /**
  * @private
  */
 async _valueDisplay() {
  try {
   await this._performFormValues()
   this._updateAppearance()
  } catch (error) {
   this._updateAppearance()
   errorDisplay(error)
  }
 }

 /**
  * @private
  */
 async _performFormValues() {
  let value = this._value
  try {
   if (value.length === 0) {
    this._internalValue = []
   } else {
    this._internalValue = await this.getListModelsFunction(value)
    this._value = this.identity(this._internalValue)
    if (this._internalValue.length > 0) {
     this._internalValue = this.sortFunction(this._internalValue)
    }
   }
  } catch (error) {
   value = this._value = []
   this._internalValue = []
   throw error
  }
 }

 /**
  * @private
  * @param {import('../html/ListModel.js').ListModel<any, SortType>[]} value
  * @returns {string[]}
  */
 identity(value) {
  return value.map(this.identityFunction)
 }

 get getListModelsFunction() {
  return assertNotNullOrUndefined(this._getListModelsFunction,
   getListModelsFunctionMissingText())
 }

 set getListModelsFunction(getListModelsFunction) {
  /**
   * @private
   * @type {(value: string[]) => Promise<import('../html/ListModel.js').
   *                                               ListModel<any, SortType>[]>}
   */
  this._getListModelsFunction = getListModelsFunction
 }

 get identityFunction() {
  return assertNotNullOrUndefined(this._identityFunction,
   identityFunctionMissingText())
 }

 set identityFunction(identityFunction) {
  /**
   * @private
   * @type {import('../IdentityFunction.js').IdentityFunction<string,
   *                  import('../html/ListModel.js').ListModel<any, SortType>>}
   */
  this._identityFunction = identityFunction
 }

 get sortFunction() {
  return assertNotNullOrUndefined(this._sortFunction, sortFunctionMissingText())
 }

 set sortFunction(sortFunction) {
  /**
   * @private
   * @type {import('../SortFunction.js').
  *      SortFunction<import('../html/ListModel.js').ListModel<any, SortType>>}
   */
  this._sortFunction = sortFunction
 }

 /**
  * @private
  */
 _updateAppearance() {
  this.innerHTML = ""
  this.append(...manySelectionRenderer(this._internalValue, noSelectionText()))
 }

}

customElements.define(display_many_tag, DisplayManyElement)