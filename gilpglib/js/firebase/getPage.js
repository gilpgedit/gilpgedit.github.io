import {
 getDocsFromServer, Query, QueryDocumentSnapshot
} from "firebase/firestore"

/**
 * @param {Query} query
 */
export async function getPage(query) {
 /** @type {QueryDocumentSnapshot | null} */
 let previousSnapshot = null
 const snapshot = await getDocsFromServer(query)
 /**
  * @type {QueryDocumentSnapshot[]}
  */
 const array = []
 snapshot.forEach(snapshot => {
  previousSnapshot = snapshot
  array.push(snapshot)
 })
 return { array, previousSnapshot }
}