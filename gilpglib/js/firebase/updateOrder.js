import {
 CollectionReference, doc, DocumentSnapshot, runTransaction
} from "firebase/firestore"

/**
 * @template OrderType
 * @param {CollectionReference<import("@firebase/firestore").DocumentData,
 *               import("@firebase/firestore").DocumentData>} orderedCollection
 * @param {import("../html/ListModel.js").
 *                                       ListModel<string, OrderType>[]} models
 * @param {string} orderBy
 */
export async function updateOrder(orderedCollection, models, orderBy) {
 await runTransaction(orderedCollection.firestore, async (transaction) => {
  /**
   * @type {[DocumentSnapshot,
   *            import("../html/ListModel.js").ListModel<string, OrderType>][]}
   */
  const initials = []
  for (let i = 0, len = models.length; i < len; i++) {
   const model = models[i]
   const ref = doc(orderedCollection, model.i)
   const snapshot = await transaction.get(ref)
   initials.push([snapshot, model])
  }
  for (let i = 0; i < initials.length; i++) {
   const [snapshot, model] = initials[i]
   if (snapshot.exists()) {
    const initial = snapshot.data()
    if (initial[orderBy] !== model.s) {
     transaction.update(snapshot.ref, { [orderBy]: model.s })
    }
   }
  }
 })
}