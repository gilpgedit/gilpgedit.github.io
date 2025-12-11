/**
 * @template M
 * @param {number} source
 * @param {number} target
 * @param {M[]} models
 * @returns {boolean} true if models where moved
 */
export function modelsMove(source, target, models) {

 if (source === target) {
  return false
 }

 const modelsLength = models.length

 if (target < 0) {

  // At the end.
  if (source >= modelsLength) {
   return false
  }

  source--
  const deleted = models.splice(source, 1)
  if (deleted.length > 0) {
   models.push(deleted[0])
  }

 } else if (source < target) {

  if (source == target - 1) {
   return false
  }
  source--
  target -= 2
  const deleted = models.splice(source, 1)
  if (deleted.length > 0) {
   if (target < modelsLength) {
    models.splice(target, 0, deleted[0])
   } else {
    models.push(deleted[0])
   }
  }

 } else {

  source--
  target--
  const deleted = models.splice(source, 1)
  if (deleted.length > 0) {
   models.splice(target, 0, deleted[0])
  }

 }

 return true

}