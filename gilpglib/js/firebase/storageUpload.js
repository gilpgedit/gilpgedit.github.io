import { ref, uploadBytes } from "firebase/storage"

/**
 * @param {import("firebase/storage").FirebaseStorage} storage
 * @param {string} name
 * @param {FormDataEntryValue} file
 */
export async function storageUpload(storage, name, file) {
 if (file instanceof File && file.size > 0) {
  const storageReference = ref(storage, name)
  return uploadBytes(storageReference, file)
 }
}