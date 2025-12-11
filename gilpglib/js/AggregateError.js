import {
 aggregateErrorMessageTemplate
} from "./i18n/template/aggregateErrorMessageTemplate.js"

export class AggregateError extends Error {
 /**
  * @param {string[]} errors
  */
 constructor(errors) {
  super(aggregateErrorMessageTemplate(errors))
  /**
   * @readonly
   */
  this.errors = errors
 }
}