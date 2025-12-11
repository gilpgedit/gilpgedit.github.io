export const scrollTopLimitDefault = 40

let _scrollTopLimit = scrollTopLimitDefault

/**
 * @param {number} scrollTopLimit
 */
export function provideScrollTopLimit(scrollTopLimit) {
 _scrollTopLimit = scrollTopLimit
}

export function scrollTopLimit() {
 return _scrollTopLimit
}