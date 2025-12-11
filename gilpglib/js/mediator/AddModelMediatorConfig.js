import { State } from "../Signal/State.js"

/**
 * @template IdType
 * @template ModelType
 * @typedef {Object} AddModelMediatorConfig
 * @property {State<boolean>} [clean]
 * @property {string} [confirmDiscardText]
 * @property {Element} [focusElement]
 * @property {(rootElement: Element) => any} displayNewCallback
 * @property {(stuff: any) => any} displayNewStuffCallback
 * @property {() => any} [disposeNewCallback]
 * @property {() => Promise<any>} [getNewStuffFunction]
 * @property {(addForm: HTMLFormElement)
 *                     => Promise<{id: IdType, model: ModelType;}>} addFunction
 */