import { CollectionReference } from "firebase/firestore"
import { validateUniqueAdd } from "./validateUniqueAdd.js"

/**
 * @param {CollectionReference} collection
 * @param {Object} model
 * @param {import("./UniqueFunction.js").UniqueFunction[]} uniqueFunctions
*/
export async function validateUniqueAddFunctions(collection, model
 , uniqueFunctions) {
 for (const uniqueFunction of uniqueFunctions) {
  const query = uniqueFunction.query(collection, model)
  await validateUniqueAdd(query, uniqueFunction.duplicateText)
 }
}