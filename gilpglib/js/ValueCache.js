import { mapNew } from "./di/mapNew.js"

/**
 * @template KeyType
 * @template ValueType
 */
export class ValueCache {
 constructor() {
  /** @type {Map<KeyType, ValueType>} */
  this.map = mapNew()
 }

 clear() {
  this.map.clear()
 }

 /**
  * @param {KeyType} key
  * @param {ValueType} value
  */
 add(key, value) {
  this.map.set(key, value)
  return value
 }

 /**
  * @param {readonly Readonly<[KeyType, ValueType]>[]} array
  */
 addAll(array) {
  const result = []
  for (let i = 0, len = array.length; i < len; i++) {
   const [k, v] = array[i]
   this.map.set(k, v)
   result.push(v)
  }
  return result
 }

 /**
  * @param {KeyType} key
  * @returns {ValueType | undefined}
  */
 get(key) {
  return this.map.get(key)
 }

 /**
  * @param {KeyType} key
  * @param {(k: KeyType) => Promise<ValueType|undefined>} seachFunction
  */
 async getValue(key, seachFunction) {
  let model = this.get(key)
  if (model === undefined) {
   model = await seachFunction(key)
   if (model) {
    this.add(key, model)
   }
  }
  return model
 }

 /**
  * @param {KeyType[]} keys
  * @param {(k: KeyType[]) => Promise<[KeyType, ValueType][]>} searchFunction
  */
 async getValues(keys, searchFunction) {
  /**
   * @type {ValueType[]}
   */
  const values = []
  /**
   * @type {KeyType[]}
   */
  const ids = []
  for (let i = 0, len = keys.length; i < len; i++) {
   const key = keys[i]
   const value = this.get(key)
   if (value === undefined) {
    ids.push(key)
   } else {
    values.push(value)
   }
  }
  if (ids.length > 0) {
   const pendingValues = await searchFunction(ids)
   this.addAll(pendingValues)
   return values.concat(pendingValues.map(record => record[1]))
  } else {
   return values
  }
 }

 /**
  * @template RefType
  * @template {{
  *   ref: RefType,
  *   array: Readonly<Readonly<[KeyType, ValueType]>[]>}} ResourceType
  * @param {ResourceType} res
  * @param {RefType} ref
  */
 addPage(res, ref) {
  if (ref === null) {
   this.clear()
  }
  return { ref: res.ref, array: this.addAll(res.array) }
 }

}