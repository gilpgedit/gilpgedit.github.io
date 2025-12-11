let _workStartFunction = workStartDefaultFunction

/**
 * @param {() => Promise<any>} workStartFunction
 */
export function provideWorkStart(workStartFunction) {
 _workStartFunction = workStartFunction
}

export async function workStart() {
 return _workStartFunction()
}

export async function workStartDefaultFunction() { }