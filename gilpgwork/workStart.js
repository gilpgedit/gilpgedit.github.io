import { workStartText } from "./i18n/text/workStartText.js"

let _workStart = workStartDefault

/**
 * @param {() => Promise<any>} workStartFunction
 */
export function provideWorkStart(workStartFunction) {
 _workStart = workStartFunction
}

export async function workStart() {
 return _workStart()
}

export async function workStartDefault() {
 console.log(workStartText())
}