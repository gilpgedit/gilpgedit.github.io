/**
 * Removes opening and closing script tags from an HTML text.
 * @param {string} html HTML text.
 * @returns {string} HTML text without opening and closing script tags.
 */
export function noScript(html) {
  return html.replace(/(\<script\>)|(\<\/script\>)/g, "")
}
