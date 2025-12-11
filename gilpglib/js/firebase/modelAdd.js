import { CollectionReference, doc, runTransaction } from "firebase/firestore"
import { validateUniqueAddFunctions } from "./validateUniqueAddFunctions.js"

/**
 * @param {CollectionReference} collection
 * @param {Readonly<Object>} model
 * @param {import("./UniqueFunction.js").UniqueFunction[]} [uniqueFunctions]
 */
export async function modelAdd(collection, model, uniqueFunctions) {
 if (uniqueFunctions) {
  await validateUniqueAddFunctions(collection, model, uniqueFunctions)
 }
 const document = doc(collection)
 await runTransaction(collection.firestore, async (transaction) => {
  transaction.set(document, model)
 })
 return document.id
}