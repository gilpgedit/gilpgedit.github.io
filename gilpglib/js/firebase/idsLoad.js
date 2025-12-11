import {
 CollectionReference, documentId, getDocsFromServer, query,
 QueryDocumentSnapshot, where
} from "firebase/firestore"

/**
 * @param {CollectionReference} collection
 * @param {string[]} ids
 * @param {number} inLimit
 */
export async function idsLoad(collection, ids, inLimit) {
 /**
  * @type {QueryDocumentSnapshot[]}
  */
 const snapshots = []
 const copy = ids.slice()
 while (copy.length > 0) {
  const part = copy.splice(0, inLimit)
  const snaps = await getDocsFromServer(
   query(collection, where(documentId(), "in", part)))
  snaps.forEach(snap => snapshots.push(snap))
 }
 return snapshots
}
