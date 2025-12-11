import { MaterialSymbol } from "../../lite/MaterialSymbol.js"

/**
 * @param {import(
 * "../../lite/parameter/LiteNoContentElementParameter.js").
 *                           LiteNoContentElementParameter<HTMLSpanElement,
 *  import("../../lite/parameter/LiteElementProperties.js").
 *                          LiteElementProperties<HTMLSpanElement>>[]} contents
 */
export function UnderlinedIcon(...contents) {
 return MaterialSymbol(...contents, "format_underlined")
}