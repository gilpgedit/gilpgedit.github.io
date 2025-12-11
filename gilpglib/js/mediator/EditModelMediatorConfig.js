import { State } from "../Signal/State.js"

/**
 * @template IdType
 * @template ModelType
 * @typedef {Object} EditModelMediatorConfig
 * @property {State<boolean>} [clean]
 * @property {string} [confirmDiscardText]
 * @property {Element} [focusElement]
 * @property {(rootElement: Element) => any} displayEditCallback 
 * @property {(model: ModelType) => any} displayModelEditCallback
 * @property {(id: IdType) => Promise<ModelType>} getFunction
 * @property {() => any} [disposeEditCallback] 
 * @property {(editForm: HTMLFormElement) => Promise<ModelType>} setFunction
 */