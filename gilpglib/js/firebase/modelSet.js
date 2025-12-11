import { CollectionReference, doc, runTransaction } from "firebase/firestore"
import { validateUniqueSetFunctions } from "./validateUniqueSetFunctions.js"

/**
 * @param {CollectionReference} collection
 * @param {string} id
 * @param {Readonly<Object>} model
 * @param {import("./UniqueFunction.js").UniqueFunction[]} [uniqueFunctions]
 */
export async function modelSet(collection, id, model, uniqueFunctions) {
 if (uniqueFunctions) {
  await validateUniqueSetFunctions(collection, id, model, uniqueFunctions)
 }
 const document = doc(collection, id)
 await runTransaction(collection.firestore, async transaction => {
  const snapshot = await transaction.get(document)
  if (snapshot.exists()) {
   transaction.set(document, model)
  }
 })
 return model
}