/**
 * @template {HTMLElement} BaseElementType
 * @template {{liteNode: BaseElementType}} ElementGroupType
 * @template {import("../parameter/LiteElementProperties.js").
 *                       LiteElementProperties<BaseElementType>} AttributesType
 * @param {import("../parameter/LiteGroupParameter.js").
 *            LiteGroupParameter<BaseElementType, ElementGroupType>[]} contents
 */
export function liteGroupFilter(contents) {
 /**
  * @type {import("../parameter/LiteElementParameter.js").
  *                LiteElementParameter<BaseElementType, AttributesType>[]}
  */
 const filtered = []
 for (let i = 0, len = contents.length; i < len; i++) {
  const content = contents[i]
  switch (typeof content) {
   case "undefined":
    continue
   case "string":
   case "number":
    filtered.push(content)
    continue
   default:
    if (content === null) {
     continue
    } else if (content instanceof Node) {
     filtered.push(content)
    }
  }
 }
 return filtered
}