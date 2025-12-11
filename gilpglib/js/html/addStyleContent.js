/**
 * @param {HTMLHeadElement | ShadowRoot} root
 * @param {string} styleContent
 */
export function addStyleContent(root, styleContent) {
 const style = root.appendChild(document.createElement("style"))
  style.textContent = styleContent
}