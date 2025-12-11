import { getDocsFromServer, Query } from "firebase/firestore"

/**
 * @param {Query} q
 * @param {string} menssage
 */
export async function foreignKeyProtect(q, menssage) {
 const cs = await getDocsFromServer(q)
 if (cs.size !== 0) throw new Error(menssage)
}