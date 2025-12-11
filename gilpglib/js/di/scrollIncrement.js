export const scrollIncrementDefault = 10

let _scrollIncrement = scrollIncrementDefault

/**
 * @param {number} scrollIncrement
 */
export function provideScrollIncrement(scrollIncrement) {
 _scrollIncrement = scrollIncrement
}

export function scrollIncrement() {
 return _scrollIncrement
}