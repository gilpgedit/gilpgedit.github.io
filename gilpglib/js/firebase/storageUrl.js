import { getDownloadURL, ref } from "firebase/storage"

/**
 * @param {import("firebase/storage").FirebaseStorage} storage
 * @param {string} name nombre del archivo.
 * @returns {Promise<string|null>}
 */
export async function storageUrl(storage, name) {
 try {
  const sr = ref(storage, name)
  return await getDownloadURL(sr)
 } catch (e) {
  console.log(e)
  return null
 }
}