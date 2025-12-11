import { CollectionReference } from "firebase/firestore"
import { validateUniqueSet } from "./validateUniqueSet.js"

/**
 * @param {string} id
 * @param {CollectionReference} c
 * @param {Readonly<Object>} model
 * @param {import("./UniqueFunction.js").UniqueFunction[]} uniqueFunctions
 */
export async function validateUniqueSetFunctions(c, id, model
 , uniqueFunctions) {
 for (const uniqueFn of uniqueFunctions) {
  const query = uniqueFn.query(c, model)
  await validateUniqueSet(query, id, uniqueFn.duplicateText)
 }
}