import { MaterialSymbol } from "../../lite/MaterialSymbol.js"

/**
 * @param {import("../../lite/parameter/LiteElementParameter.js").
 *                               LiteElementParameter<HTMLSpanElement,
 *              import("../../lite/parameter/LiteElementProperties.js").
 *                          LiteElementProperties<HTMLSpanElement>>[]} contents
 */
export function DeleteIcon(...contents) {
 return MaterialSymbol(...contents, "delete_forever")
}