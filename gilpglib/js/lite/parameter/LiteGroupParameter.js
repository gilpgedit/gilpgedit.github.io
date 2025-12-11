import { Signal } from "../../Signal/Signal.js"

/**
 * @template {HTMLElement} BaseElementType
 * @template {{liteNode: BaseElementType}} ElementGroupType
 * @typedef {undefined | null | string | number | Signal<string> | Node |
 *                      ((group: ElementGroupType) => any) } LiteGroupParameter
 */