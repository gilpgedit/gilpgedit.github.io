import {
 getDocsFromServer, Query, QueryDocumentSnapshot
} from "firebase/firestore"

/**
 * @param {Query} query
 */
export async function getModels(query) {
 const snapshot = await getDocsFromServer(query)
 /**
  * @type {QueryDocumentSnapshot[]}
  */
 const array = []
 snapshot.forEach(snapshot => array.push(snapshot))
 return array
}