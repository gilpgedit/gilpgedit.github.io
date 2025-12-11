import { MaterialSymbol } from "../../lite/MaterialSymbol.js"

/**
 * @param {import("../../lite/parameter/LiteNoContentElementParameter.js").
 *                            LiteNoContentElementParameter<HTMLSpanElement,
 *                   import("../../lite/parameter/LiteElementProperties.js").
 *                          LiteElementProperties<HTMLSpanElement>>[]} contents
 */
export function DragHandleIcon(...contents) {
 return MaterialSymbol(...contents, "drag_handle")
}