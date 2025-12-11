import { deleteObject, ref } from "firebase/storage"

/**
 * @param {import("firebase/storage").FirebaseStorage} storage
 * @param {string} name
 */
export async function storageDelete(storage, name) {
 const storageReference = ref(storage, name)
 return deleteObject(storageReference)
}