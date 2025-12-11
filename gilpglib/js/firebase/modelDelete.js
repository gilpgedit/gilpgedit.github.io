import { CollectionReference, doc, runTransaction } from "firebase/firestore"

/**
 * @param {CollectionReference} collection
 * @param {string} id
 */
export async function modelDelete(collection, id) {
 const document = doc(collection, id)
 await runTransaction(collection.firestore, async (transaction) => {
  const snapshot = await transaction.get(document)
  if (snapshot.exists()) {
   transaction.delete(document)
  }
 })
}