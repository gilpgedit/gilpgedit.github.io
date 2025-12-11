import { RequestDiscardA } from "./RequestDiscardA.js"

/**
 * @param {import("./parameter/LiteElementParameter.js").
*                           LiteElementParameter<HTMLAnchorElement,
*                    import("./a.js").HTMLAnchorElementProperties>[]} contents
*/
export function IconTextA(...contents) {
 return RequestDiscardA({ style: { textDecoration: "none" } }, ...contents)
}