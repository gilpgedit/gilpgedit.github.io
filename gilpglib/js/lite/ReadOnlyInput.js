import { input } from "./input.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
 *                         LiteElementParameter<HTMLInputElement,
 *                 import("./input.js").HTMLInputElementProperties>[]} contents
 */
export function ReadOnlyInput(...contents) {
 return input({
    style: { border: "none", outline: "none", backgroundColor: "transparent" },
    readOnly: true,
    tabIndex: -1
 }, ...contents)
}