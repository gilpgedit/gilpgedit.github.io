import { ProblemDetails } from "../ProblemDetails.js"
import {
 errorDisplayBasicFunction
} from "../html/errorDisplayBasicFunction.js"

export const errorDisplayFunctionDefault = errorDisplayBasicFunction
let _errorDisplayFunction = errorDisplayFunctionDefault

/**
 * @param {import("../ErrorFunction.js").ErrorFunction} errorDisplayFunction
 */
export function provideErrorDisplay(errorDisplayFunction) {
 _errorDisplayFunction = errorDisplayFunction
}

/**
 * @param {{message:string} | null | ProblemDetails} error
 */
export function errorDisplay(error) {
 _errorDisplayFunction(error)
}