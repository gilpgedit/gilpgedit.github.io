import { SPACE } from "./const/SPACE.js"
import { setNew } from "./di/setNew.js"
import { up } from "./up.js"

/**
 * @param {(string | number | null | undefined)[]} params
 */
export function createKeywords(...params) {
 /**
  * @type {Set<string>}
  */
 const keywords = setNew()
 for (let i = 0; i < params.length; i++) {
  const param = params[i]
  switch (typeof param) {
   case "string":
    for (const s of up(param).split(SPACE)) {
     if (s) {
      keywords.add(s)
     }
    }
    continue
   case "number":
    if (!isNaN(param)) {
     keywords.add(param.toString())
    }
   default:
    break
  }
 }
 return Array.from(keywords)
}