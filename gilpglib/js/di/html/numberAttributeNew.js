import { NumberAttribute } from "../../html/NumberAttribute.js"

let _numberAttributeNewFunction = numberAttributeNewFunctionDefault

/**
 *  @param {() => NumberAttribute} numberAttributeNewFunction
 */
export function provideNumberAttributeNew(numberAttributeNewFunction) {
 _numberAttributeNewFunction = numberAttributeNewFunction
}

/**
 * @param {HTMLElement} element
 * @param {string} name
 */
export function numberAttributeNew(element, name) {
 return _numberAttributeNewFunction(element, name)
}

/**
 * @param {HTMLElement} element
 * @param {string} name
 */
function numberAttributeNewFunctionDefault(element, name) {
 return new NumberAttribute(element, name)
}