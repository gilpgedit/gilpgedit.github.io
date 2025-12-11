import { Signal } from "../../Signal/Signal.js"

/**
 * @typedef {object} HTMLTableCellElementOnly
 * @property {string | Signal<string>} [abbr] Sets or retrieves abbreviated text for the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/abbr)
 * @property {number | Signal<number>} [colSpan] Sets or retrieves the number columns in the table that the object should span.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/colSpan)
 * @property {number | Signal<number>} [rowSpan] Sets or retrieves how many rows in a table the cell should span.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/rowSpan)
 * @property {string | Signal<string>} [scope] Sets or retrieves the group of cells in a table to which the object's information applies.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement/scope)
 */
/**
 * @typedef {import("./LiteElementProperties.js").
 *     LiteElementProperties<HTMLTableCellElement> & HTMLTableCellElementOnly
 *                                             } HTMLTableCellElementProperties
 */