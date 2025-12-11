import { assertNotNullOrUndefined } from '../assertNotNullOrUndefined.js'
import { header_attribute } from '../const/header_attribute.js'
import { noFilter_attribute } from '../const/noFilter_attribute.js'
import { required_attribute } from '../const/required_attribute.js'
import { value_attribute } from '../const/value_attribute.js'
import { stringAttributeNew } from '../di/html/stringAttributeNew.js'
import {
 badElementTypeTemplate
} from '../i18n/template/badElementTypeTemplate.js'
import {
 getListModelFunctionMissingText
} from '../i18n/text/getListModelFunctionMissingText.js'
import {
 identityFunctionMissingText
} from '../i18n/text/identityFunctionMissingText.js'
import { noSelectionText } from '../i18n/text/noSelectionText.js'
import { pagingMissingText } from '../i18n/text/pagingMissingText.js'
import { _ } from '../lite/_.js'
import { PagingDialogMediator } from '../mediator/PagingDialogMediator.js'
import { SelectOneDialogMediator } from '../mediator/SelectOneDialogMediator.js'
import { Signal } from '../Signal/Signal.js'
import { oneSelectionRenderer } from './oneSelectionRenderer.js'
import { SelectElement } from "./SelectElement.js"

export const select_one_tag = "select-one"

/**
 * @typedef {Object} SelectOneElementOnly
 * @property {string | Signal<string>} [name]
 * @property {string | Signal<string>} [value]
 * @property {boolean | Signal<boolean>} [required]
 * @property {boolean | Signal<boolean>} [noFilter]
 * @property {boolean | Signal<boolean>} [prefetch]
 * @property {string | Signal<string>} [header]
 * @property {import('../IdentityFunction.js').IdentityFunction<string,
 *            (import("../html/ListModel.js").ListModel<any, any> | undefined)> |
 *         Signal<import('../IdentityFunction.js').IdentityFunction<string,
 *           (import("../html/ListModel.js").ListModel<any, any> | undefined)>>
 *                                                           } identityFunction
 * @property {(value: string) =>
 *    Promise<import('../html/ListModel.js').ListModel<any, any> | undefined> |
 *     Signal<(value: string) =>
 *     Promise<import('../html/ListModel.js').ListModel<any, any> | undefined>>
 *                                                       } getListModelFunction
 * @property {import('../html/Paging.js').Paging<any, any> |
 *                 Signal<import('../html/Paging.js').Paging<any, any>>} paging
 */
/**
 * @typedef {import("../lite/parameter/LiteElementProperties.js").
 *  LiteElementProperties<SelectOneElement> & SelectOneElementOnly
 *                                                  } SelectOneElementProperties
 */
/**
 * @param {import("../lite/parameter/LiteNoContentElementParameter.js").
 *                        LiteNoContentElementParameter<SelectOneElement,
 *                                       SelectOneElementProperties>[]} contents
 */
export function SelectOne(...contents) {
 return _(new SelectOneElement(), ...contents)
}

/**
 * @extends {SelectElement<any, any, string,
 *             import('../html/ListModel.js').ListModel<any, any> | undefined>}
 */
export class SelectOneElement extends SelectElement {

 static get observedAttributes() {
  return [value_attribute, required_attribute, noFilter_attribute,
   header_attribute]
 }

 /**
  * @param {Element} element
  */
 static cast(element) {
  if (element instanceof SelectOneElement) {
   return element
  } else {
   throw new Error(badElementTypeTemplate(select_one_tag))
  }
 }

 constructor() {
  super()
  /**
   * @private
   * @readonly
   */
  this._value = stringAttributeNew(this, value_attribute)
 }

 /**
  * @override
  * @param {string} attributeName
  */
 attributeChangedCallback(attributeName) {
  switch (attributeName) {
   case value_attribute:
    this.valueDisplay()
    break
   default:
    super.attributeChangedCallback(attributeName)
  }
 }

 /**
  * @override
  * @returns {boolean} */
 hasSelection() {
  return this.value !== null
 }

 get value() {
  return this._value.get()
 }

 /**
  * @override
  */
 set value(value) {
  this._value.set(value)
 }

 get type() {
  return select_one_tag.toUpperCase()
 }

 /**
  * @override
  */
 async performFormValues() {
  try {
   const value = this.value
   if (value === "") {
    this._internalValue = undefined
    this._internals.setFormValue(value)
   } else {
    this._internalValue = await this.getListModelFunction(value)
    if (this._internalValue === undefined) {
     this.value = ""
    } else {
     this._internals.setFormValue(value)
    }
   }
  } catch (error) {
   this.value = ""
   throw error
  }
 }

 /**
  * @override
  */
 updateAppearance() {
  this.innerHTML = ""
  this.append(oneSelectionRenderer(this._internalValue, noSelectionText()))
 }

 /**
  * @override
  * @returns {PagingDialogMediator<any, any,
  *            import('../html/ListModel.js').ListModel<any, any> | undefined>}
  */
 pagingDialogMediatorNew() {
  return new SelectOneDialogMediator(this.paging, this.identityFunction)
 }

 /**
  * @override
  * @protected
  * @param {import('../html/ListModel.js').ListModel<any, any>} value
  * @returns {string}
  */
 identity(value) {
  return this.identityFunction(value)
 }

 get identityFunction() {
  return assertNotNullOrUndefined(this._identityFunction,
   identityFunctionMissingText())
 }

 set identityFunction(identityFunction) {
  /**
   * @private
   * @type {import('../IdentityFunction.js').IdentityFunction<string,
   *         (import("../html/ListModel.js").ListModel<any, any> | undefined)>}
   */
  this._identityFunction = identityFunction
 }

 get getListModelFunction() {
  return assertNotNullOrUndefined(this._getListModelFunction,
   getListModelFunctionMissingText())
 }

 set getListModelFunction(getListModelFunction) {
  /**
   * @private
   * @type {(value: string) =>
   *   Promise<import('../html/ListModel.js').ListModel<any, any> | undefined>}
   */
  this._getListModelFunction = getListModelFunction
 }

 get paging() {
  return assertNotNullOrUndefined(this._paging, pagingMissingText())
 }

 set paging(paging) {
  /**
   * @private
   * @type {import('../html/Paging.js').Paging<any, any>}
   */
  this._paging = paging
 }

}
SelectOneElement.formAssociated = true

customElements.define(select_one_tag, SelectOneElement)