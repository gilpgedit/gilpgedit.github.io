let _dateNewFunction = dateNewDefault

/**
 * @param {(value?: string | number | Date) => Date} dateNewFunction
 */
export function provideSetNew(dateNewFunction) {
 _dateNewFunction = dateNewFunction
}

/**
 * @param {string | number | Date} [value]
 */
export function dateNew(value) {
 return _dateNewFunction(value)
}

/**
 * @param {string | number | Date} [value]
 */
export function dateNewDefault(value) {
 return value === undefined ? new Date() : new Date(value)
}