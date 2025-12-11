import { id_name } from "../const/id_name.js"
import { input } from "./input.js"

/**
* @param {import("./parameter/LiteElementParameter.js").
 *                      LiteElementParameter<HTMLInputElement,
 *                 import("./input.js").HTMLInputElementProperties>[]} contents
 */
export function IdInput(...contents) {
 return input({
  type: "hidden",
  name: id_name
 },
  ...contents
 )
}