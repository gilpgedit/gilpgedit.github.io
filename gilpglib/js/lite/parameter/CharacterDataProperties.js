import { Signal } from "../../Signal/Signal.js"

/**
 * @typedef {Object} CharacterDataOnly
 * @property {string | Signal<string>} [data] [MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/data)
 */
/**
 * @typedef {import("./NodeProperties.js").NodeProperties & CharacterDataOnly
 *                                                    } CharacterDataProperties 
 */