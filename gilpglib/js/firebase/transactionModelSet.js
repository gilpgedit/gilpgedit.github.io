import { CollectionReference, doc, Transaction } from "firebase/firestore"

/**
 * @param {Transaction} transaction
 * @param {CollectionReference} collection
 * @param {string} id
 * @param {Readonly<Object>} model
 */
export async function transactionModelSet(transaction, collection, id, model) {
 const snapshot = await transaction.get(doc(collection, id))
 if (snapshot.exists()) {
  transaction.set(snapshot.ref, model)
 }
 return model
}