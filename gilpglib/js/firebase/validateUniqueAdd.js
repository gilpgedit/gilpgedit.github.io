import { getDocsFromServer, Query } from "firebase/firestore"

/**
 * @param {Query | undefined} query
 * @param {string} duplicateText
 */
export async function validateUniqueAdd(query, duplicateText) {
 if (query) {
  const similarOnes = await getDocsFromServer(query)
  if (similarOnes.size !== 0) throw new Error(duplicateText)
 }
}