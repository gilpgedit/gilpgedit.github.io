
/**
 * @template {HTMLElement} ElementType
 * @template {import("./LiteElementProperties.js").
 *                           LiteElementProperties<ElementType>} AttributesType
 * @typedef {undefined | null | AttributesType |
 *   import("../TextNode.js").TextNode | ((this: ElementType) => any) 
 *                                              } LiteNoContentElementParameter
 */