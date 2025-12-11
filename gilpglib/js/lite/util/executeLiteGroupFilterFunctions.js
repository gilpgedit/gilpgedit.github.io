/**
 * @template {HTMLElement} BaseElementType
 * @template {{liteNode: BaseElementType;}} ElementGroupType
 * @param {ElementGroupType} group
 * @param {import("../parameter/LiteGroupParameter.js").
 *            LiteGroupParameter<BaseElementType, ElementGroupType>[]} contents
 */
export function executeLiteGroupFilterFunctions(group, contents) {
 for (let i = 0, len = contents.length; i < len; i++) {
  const content = contents[i]
  if (typeof content === "function") {
   content(group)
  }
 }
 return group
}