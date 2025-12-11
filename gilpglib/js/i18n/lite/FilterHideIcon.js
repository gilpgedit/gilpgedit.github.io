import { MaterialSymbol } from "../../lite/MaterialSymbol.js"

/**
 * @param {import("../../lite/parameter/LiteNoContentElementParameter.js").
 *                            LiteNoContentElementParameter<HTMLSpanElement,
 *                   import("../../lite/parameter/LiteElementProperties.js").
 *                          LiteElementProperties<HTMLSpanElement>>[]} contents
 */
export function FilterHideIcon(...contents) {
 return MaterialSymbol(...contents, "arrow_back")
}