export const scrollBottomLimitDefault = 40

let _scrollBottomLimit = scrollBottomLimitDefault

/**
 * @param {number} scrollBottomLimit
 */
export function provideScrollBottomLimit(scrollBottomLimit) {
 _scrollBottomLimit = scrollBottomLimit
}

export function scrollBottomLimit() {
 return _scrollBottomLimit
}