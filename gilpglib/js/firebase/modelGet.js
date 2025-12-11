import {
 CollectionReference, doc, getDocFromServer
} from "firebase/firestore"

/**
 * @template ModelType
 * @param {CollectionReference} collection
 * @param {string} id
 * @returns {Promise<ModelType | undefined>}
 */
export async function modelGet(collection, id) {
 const document = doc(collection, id)
 const snapshot = await getDocFromServer(document)
 if (snapshot.exists()) {
  /**
   * @type {Object}
   */
  const data = snapshot.data()
  return data
 } else {
  return undefined
 }
}