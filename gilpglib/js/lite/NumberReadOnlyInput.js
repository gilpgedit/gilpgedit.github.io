import { number_type } from "../const/number_type.js"
import { ReadOnlyInput } from "./ReadOnlyInput.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLInputElement,
 *                 import("./input.js").HTMLInputElementProperties>[]} contents
 */
export function NumberReadOnlyInput(...contents) {
 return ReadOnlyInput({ type: number_type }, ...contents)
}