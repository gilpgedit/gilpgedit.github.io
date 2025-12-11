import { MaterialSymbol } from "../../lite/MaterialSymbol.js"

/**
 * @param {import(
 * "../../lite/parameter/LiteNoContentElementParameter.js").
 *                           LiteNoContentElementParameter<HTMLSpanElement,
 *  import("../../lite/parameter/LiteElementProperties.js").
 *                          LiteElementProperties<HTMLSpanElement>>[]} contents
 */
export function CreateLinkIcon(...contents) {
 return MaterialSymbol(...contents, "link")
}