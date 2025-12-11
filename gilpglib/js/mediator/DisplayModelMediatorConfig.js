/**
 * @template IdType
 * @template ModelType
 * @typedef {Object} DisplayModelMediatorConfig
 * @property {(model: ModelType) => string} [confirmDeleteFunction] 
 * @property {(rootElement: Element) => any} displayDisplayCallback 
 * @property {(model: ModelType) => any} displayModelDisplayCallback 
 * @property {() => any} [disposeDisplayCallback] 
 * @property {(id: IdType) => Promise<ModelType>} getFunction
 * @property {(id: IdType, model: ModelType) => Promise<any>} deleteFunction
 */