import { getDocsFromServer, Query } from "firebase/firestore"

/**
 * @param {Query | undefined} query
 * @param {string} id
 * @param {string} duplicateText
 */
export async function validateUniqueSet(query, id, duplicateText) {
 if (query) {
  const similarOnes = await getDocsFromServer(query)
  if (similarOnes.size > 0) {
   similarOnes.forEach(snapshot => {
    if (snapshot.id !== id)
     throw new Error(duplicateText)
   })
  }
 }
}