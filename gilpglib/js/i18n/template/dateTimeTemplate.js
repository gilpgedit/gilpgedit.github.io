/**
 * @param {Date|null|undefined} dateTime
 */
export function dateTimeTemplate(dateTime) {
 return dateTime === null || dateTime === undefined ?
  ""
  : dateTime.toLocaleString([], {
   hourCycle: "h23", timeStyle: "short", dateStyle: "short"
  })
}