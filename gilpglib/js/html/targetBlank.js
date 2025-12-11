/**
 * Transforms all af the anchors inside html text so the have target="_blank".
 * @param {string} html html text.
 * @returns {string} html text where all of the anchors have target="_blank"
 */
export function targetBlank(html) {
 return html.replace(/\<a /g, "<a target=_blank rel=noreferrer ")
}
