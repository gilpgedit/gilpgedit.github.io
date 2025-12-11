import { DocumentSnapshot, QuerySnapshot } from "@firebase/firestore"

/**
 * @param {QuerySnapshot} querySnapshot
 * @param {import("@firebase/firestore").Transaction} transaction
 */
export async function transactionGetDocumentSnapshots(querySnapshot
 , transaction) {
 /**
  * @type {Promise<DocumentSnapshot>[]}
  */
 const snapshots = []
 querySnapshot.forEach(documentSnapshot =>
  snapshots.push(transaction.get(documentSnapshot.ref)))
 return Promise.all(snapshots)
}