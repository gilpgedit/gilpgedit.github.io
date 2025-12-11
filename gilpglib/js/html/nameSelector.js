import { data_name_attribute } from "../const/data_name_attribute.js"
import { name_attribute } from "../const/name_attribute.js"

/**
 * @param {string} name
 */
export function nameSelector(name) {
 return `[id="${name}"],[${name_attribute}="${name
  }"],[${data_name_attribute}="${name}"]`
}