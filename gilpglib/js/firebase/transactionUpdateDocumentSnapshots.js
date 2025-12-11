import { DocumentSnapshot } from "@firebase/firestore"

/**
 * @template {import("@firebase/firestore").DocumentData} ModelType
 * @param {DocumentSnapshot[]} snapshots
 * @param {import("@firebase/firestore").Transaction} transaction
 * @param {(model: ModelType)=> any} updateModelFunction
 */
export function transactionUpdateDocumentSnapshots(snapshots, transaction
 , updateModelFunction) {
 for (let i = 0, len = snapshots.length; i < len; i++) {
  const snapshot = snapshots[i]
  if (snapshot.exists()) {
   const model = snapshot.data()
   // @ts-ignore
   updateModelFunction(model)
   transaction.set(snapshot.ref, model)
  }
 }
}