let _eventNewFunction = eventNewFunctionDefault

/**
 *  @param {(type: string, eventInitDict?: EventInit) => Event} eventNewFunction
 */
export function provideEventNew(eventNewFunction) {
 _eventNewFunction = eventNewFunction
}

/**
 * @param {string} type
 * @param {EventInit} [eventInitDict]
 */
export function eventNew(type, eventInitDict) {
 return _eventNewFunction(type, eventInitDict)
}

/**
 * @param {string} type
 * @param {EventInit} [eventInitDict]
 */
function eventNewFunctionDefault(type, eventInitDict) {
 return new Event(type, eventInitDict)
}