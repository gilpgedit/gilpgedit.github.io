let _searchParamsNewFunction = searchParamsNewFunctionDefault

/**
 * @param {(init: string | string[][] | Record<string, string>
 *   | URLSearchParams | undefined) => URLSearchParams} searchParamsNewFunction
*/
export function provideSearchParamsNew(searchParamsNewFunction) {
 _searchParamsNewFunction = searchParamsNewFunction
}

/**
 * @param {string | string[][] | Record<string, string> | URLSearchParams
 *                                                            | undefined} init
 */
export function searchParamsNew(init = location.search) {
 return _searchParamsNewFunction(init)
}

/**
 * @param {string | string[][] | Record<string, string> | URLSearchParams
 *                                                            | undefined} init
 */
export function searchParamsNewFunctionDefault(init = location.search) {
 return new URLSearchParams(init)
}