import { liteNode_property } from "../../const/liteNode_property.js"
import { Signal } from "../../Signal/Signal.js"

/**
 * @template {HTMLElement} ElementType
 * @template {import("./LiteElementProperties.js").
 *                           LiteElementProperties<ElementType>} AttributesType
 * @typedef {undefined | null | string | number | Signal<string> |
 *  AttributesType | Node | { [liteNode_property]: HTMLElement } |
 *                       ((this: ElementType) => any) } LiteElementParameter
 */