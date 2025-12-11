import { requestDiscard } from "../html/requestDiscard.js"
import { a } from "./a.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
*                           LiteElementParameter<HTMLAnchorElement,
*                    import("./a.js").HTMLAnchorElementProperties>[]} contents
*/
export function RequestDiscardA(...contents) {
 return a({ onclick: requestDiscard }, ...contents)
}