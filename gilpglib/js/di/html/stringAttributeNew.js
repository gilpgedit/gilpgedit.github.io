import { StringAttribute } from "../../html/StringAttribute.js"

let _stringAttributeNewFunction = stringAttributeNewDefaultFunction

/**
 *  @param {() => StringAttribute} stringAttributeNewFunction
 */
export function provideStringAttributeNew(stringAttributeNewFunction) {
 _stringAttributeNewFunction = stringAttributeNewFunction
}

/**
 * @param {HTMLElement} element
 * @param {string} name
 */
export function stringAttributeNew(element, name) {
 return _stringAttributeNewFunction(element, name)
}

/**
 * @param {HTMLElement} element
 * @param {string} name
 */
function stringAttributeNewDefaultFunction(element, name) {
 return new StringAttribute(element, name)
}