/**
 * @param { Node } node
 */
export function getParentNode(node) {
 if (node instanceof ShadowRoot) {
  return node.host
 } else {
  return node.parentNode
 }
}