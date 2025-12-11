let _formDataNewFunction = formDataNewFunctionDefault

/**
 * @param {(form?: HTMLFormElement) => FormData} formDataNewFunction
 */
export function provideFormDataNew(formDataNewFunction) {
 _formDataNewFunction = formDataNewFunction
}


/**
 * @param {HTMLFormElement} [form]
 */
export function formDataNew(form) {
 return _formDataNewFunction(form)
}

/**
 * @param {HTMLFormElement} [form]
 */
export function formDataNewFunctionDefault(form) {
 return new FormData(form)
}