import { BooleanAttribute } from "../../html/BooleanAttribute.js"

let _booleanAttributeNewFunction = booleanAttributeNewDefaultFunction

/**
 *  @param {() => BooleanAttribute} booleanAttributeNewFunction
 */
export function provideBooleanAttributeNew(booleanAttributeNewFunction) {
 _booleanAttributeNewFunction = booleanAttributeNewFunction
}

/**
 * @param {HTMLElement} element
 * @param {string} name
 */
export function booleanAttributeNew(element, name) {
 return _booleanAttributeNewFunction(element, name)
}

/**
 * @param {HTMLElement} element
 * @param {string} name
 */
function booleanAttributeNewDefaultFunction(element, name) {
 return new BooleanAttribute(element, name)
}