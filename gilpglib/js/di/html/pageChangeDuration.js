export const pageChangeDurationDefault = 510

let _pageChangeDuration = pageChangeDurationDefault

/**
 * @param {number} pageChangeDuration
 */
export function providePageChangeDuration(pageChangeDuration) {
 _pageChangeDuration = pageChangeDuration
}

export function pageChangeDuration() {
 return _pageChangeDuration
}