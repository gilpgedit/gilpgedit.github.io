let _workEndFunction = workEndDefaultFunction

/**
 * @param {() => Promise<any>} workEndFunction
 */
export function provideWorkEnd(workEndFunction) {
 _workEndFunction = workEndFunction
}

export async function workEnd() {
 return _workEndFunction()
}

export async function workEndDefaultFunction() { }