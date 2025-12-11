import { assertNotNullOrUndefined } from '../assertNotNullOrUndefined.js'
import { header_attribute } from '../const/header_attribute.js'
import { noFilter_attribute } from '../const/noFilter_attribute.js'
import { required_attribute } from '../const/required_attribute.js'
import { formDataNew } from '../di/html/formDataNew.js'
import {
 badElementTypeTemplate
} from '../i18n/template/badElementTypeTemplate.js'
import {
 getListModelsFunctionMissingText
} from '../i18n/text/getListModelsFunctionMissingText.js'
import {
 identityFunctionMissingText
} from '../i18n/text/identityFunctionMissingText.js'
import { noSelectionText } from '../i18n/text/noSelectionText.js'
import { pagingMissingText } from '../i18n/text/pagingMissingText.js'
import { requiredText } from '../i18n/text/requiredText.js'
import {
 sortFunctionMissingText
} from '../i18n/text/sortFunctionMissingText.js'
import { _ } from '../lite/_.js'
import { PagingDialogMediator } from '../mediator/PagingDialogMediator.js'
import {
 SelectManyDialogMediator
} from '../mediator/SelectManyDialogMediator.js'
import { Signal } from '../Signal/Signal.js'
import { manySelectionRenderer } from './manySelectionRenderer.js'
import { SelectElement } from "./SelectElement.js"

export const select_many_tag = "select-many"

/**
 * @template SortType
 * @typedef {Object} SelectManyElementOnly
 * @property {string | Signal<string>} [name]
 * @property {string[] | Signal<string[]>} [value]
 * @property {boolean | Signal<boolean>} [required]
 * @property {boolean | Signal<boolean>} [noFilter]
 * @property {boolean | Signal<boolean>} [prefetch]
 * @property {string | Signal<string>} [header]
 * @property {import('../IdentityFunction.js').IdentityFunction<string,
 *                  import('../html/ListModel.js').ListModel<any, SortType>> |
 *         Signal<import('../IdentityFunction.js').IdentityFunction<string,
 *                  import('../html/ListModel.js').ListModel<any, SortType>>>
 *                                                           } identityFunction
 * @property {import('../SortFunction.js').
 *      SortFunction<import('../html/ListModel.js').
 *                                       ListModel<any, SortType>> |
 *                                     Signal<import('../SortFunction.js').
 *      SortFunction<import('../html/ListModel.js').ListModel<any, SortType>>>
 *                                                               } sortFunction
 * @property {(value: string[]) => Promise<import('../html/ListModel.js').
 *                        ListModel<any, SortType>[]> |
 *   Signal<(value: string[]) => Promise<import('../html/ListModel.js').
 *                          ListModel<any, SortType>[]>>} getListModelsFunction
 * @property {import('../html/Paging.js').Paging<any, SortType> |
 *            Signal<import('../html/Paging.js').Paging<any, SortType>>} paging
 */
/**
 * @template SortType
 * @typedef {import("../lite/parameter/LiteElementProperties.js").
 *  LiteElementProperties<SelectManyElement> & SelectManyElementOnly<SortType>
 *                                                } SelectManyElementProperties
 */
/**
 * @template SortType
 * @param {import("../lite/parameter/LiteNoContentElementParameter.js").
 *                        LiteNoContentElementParameter<SelectManyElement,
 *                           SelectManyElementProperties<SortType>>[]} contents
 */
export function SelectMany(...contents) {
 return _(new SelectManyElement(), ...contents)
}

/**
 * @template SortType
 * @extends {SelectElement<any, SortType, string[],
 *              import('../html/ListModel.js').ListModel<any, SortType>[]>}
 */
export class SelectManyElement extends SelectElement {

 static get observedAttributes() {
  return [required_attribute, noFilter_attribute, header_attribute]
 }

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof SelectManyElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(select_many_tag))
  }
 }

 constructor() {
  super()
  /**
   * @type {string[]}
   */
  this._value = []
 }

 /**
  * @override
  * @returns {boolean} */
 hasSelection() {
  return this._value.length > 0
 }


 get value() {
  return this._value
 }

 set value(value) {
  this._value = value
  this.valueDisplay()
 }

 /**
  * @override
  * @protected
  */
 async performFormValues() {
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
  } finally {
   if (this.form) {
    const formData = formDataNew()
    const name = this.name
    if (name) {
     for (const stringId of value) {
      formData.append(name, stringId)
     }
    }
    this._internals.setFormValue(formData)
   }
  }
 }

 /**
  * @override
  * @protected
  */
 updateAppearance() {
  this.innerHTML = ""
  this.append(...manySelectionRenderer(this._internalValue, noSelectionText()))
 }

 /**
  * @override
  * @returns {PagingDialogMediator<any, SortType,
  *             import('../html/ListModel.js').ListModel<any, SortType>[]>}
  */
 pagingDialogMediatorNew() {
  return new SelectManyDialogMediator(this.paging, this.identityFunction)
 }

 /**
  * @override
  * @protected
  * @param {import('../html/ListModel.js').ListModel<any, SortType>[]} value
  * @returns {string[]}
  */
 identity(value) {
  return value.map(this.identityFunction)
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

 get paging() {
  return assertNotNullOrUndefined(this._paging, pagingMissingText())
 }

 set paging(paging) {
  /**
   * @private
   * @type {import('../html/Paging.js').Paging<any, SortType>}
   */
  this._paging = paging
 }

 internalCheckValidity() {
  if (this._customValidity !== "") {
   this._internals.setValidity({ customError: true }, this._customValidity)
   return false
  } else if (this.required && !this.value.length) {
   this._internals.setValidity({ valueMissing: true }, requiredText())
   return false
  } else {
   this._internals.setValidity({})
   return true
  }
 }

}
SelectManyElement.formAssociated = true

customElements.define(select_many_tag, SelectManyElement)