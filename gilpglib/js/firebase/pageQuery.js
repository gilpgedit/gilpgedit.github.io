import {
 CollectionReference, limit, query, QueryConstraint, QueryDocumentSnapshot,
 startAfter, where
} from "firebase/firestore"
import { w_property } from "../const/w_property.js"
import { filterPrepare } from "./filterPrepare.js"

/**
 * @param {number} length
 * @param {QueryDocumentSnapshot | null} previousSnapshot
 * @param {string} filter
 * @param {number} inLimit
 * @param {CollectionReference} collection
 * @param {QueryConstraint[]} parameters
 */
export function pageQuery(length, previousSnapshot, filter, inLimit, collection
 , ...parameters) {
 const f = filter.trim()
 if (f) {
  if (previousSnapshot) {
   return query(collection,
    where(w_property, "array-contains-any", filterPrepare(f, inLimit)),
    ...parameters,
    startAfter(previousSnapshot),
    limit(length))
  } else {
   return query(collection,
    where(w_property, "array-contains-any", filterPrepare(f, inLimit)),
    ...parameters,
    limit(length))
  }
 } else if (previousSnapshot) {
  return query(collection,
   ...parameters,
   startAfter(previousSnapshot),
   limit(length))
 } else {
  return query(collection, ...parameters, limit(length))
 }
}