import { CollectionReference, Query } from "firebase/firestore"

/**
 * @typedef {Object} UniqueFunction
 * @property {(collection: CollectionReference, model: Readonly<Object>)
 *                                               => (Query | undefined)} query
 * @property {string} duplicateText
*/