import { errorDisplayBasicFunction } from '../html/errorDisplayBasicFunction.js'
import { html } from "../html/html.js"
import { htmlentities } from '../html/htmlentities.js'
import { problemDetailsLog } from '../html/problemDetailsLog.js'
import { problemDetailsLogMessage } from '../html/problemDetailsLogMessage.js'
import { errorIcon } from '../i18n/lite/errorIcon.js'
import { infoIcon } from '../i18n/lite/infoIcon.js'
import { detailsCodeTemplate } from '../i18n/template/detailsCodeTemplate.js'
import { errorText } from '../i18n/text/errorText.js'
import { okButtonText } from '../i18n/text/okButtonText.js'
import { ProblemDetails } from '../ProblemDetails.js'
import { button } from './button.js'
import { dialog } from './dialog.js'
import { div } from './div.js'
import { form } from './form.js'
import { MaterialSymbol } from './MaterialSymbol.js'
import { pre } from './pre.js'

/**
 * @type {HTMLDialogElement | null}
 */
let _dialogElement = null

/**
 * @type {HTMLSpanElement | null}
 */
let _iconElement = null

/**
 * @type {HTMLPreElement | null}
 */
let _preElement = null

function _ensureInstance() {

 if (!_dialogElement) {

  _dialogElement = dialog(
   div({
    style: {
     cssText: /* css */ `display:flex;align-items:center;gap:var(--layoutGap)`
    }
   },
    _iconElement = MaterialSymbol(),
    _preElement = pre({
     style: {
      cssText: /* css */ `flex: 1 1; overflow-wrap: anywhere`
     }
    })
   ),
   form({
    method: "dialog",
    style: {
     cssText: /* css */ `
      display:flex;
      justify-content:center;
      align-items:center;
      margin-top:var(--layoutGap);
      gap:var(--layoutGap)`
    }
   },
    button(okButtonText())
   )
  )

 }

 if (!_dialogElement.isConnected) {
  document.body.appendChild(_dialogElement)
 }

}

/**
 * @param {string} icon
 * @param {string} message
 */
function _messageDisplay(icon, message) {

 if (_iconElement && _preElement && _dialogElement
  && _dialogElement.isConnected && !_dialogElement.open) {

  _iconElement.textContent = icon
  _preElement.innerHTML = message
  _dialogElement.showModal()

 }

}

/**
 * @param {{message: string} | null | ProblemDetails} error
 */
export function messageDialogErrorDisplay(error) {

 _ensureInstance()

 if (_iconElement && _preElement && _dialogElement && !_dialogElement.open) {

  if (error === null) {

   const errorMessage = errorText()
   console.error(errorMessage)
   _messageDisplay(errorIcon(), htmlentities(errorMessage))

  } else if (error instanceof ProblemDetails) {

   let htmlMessage = htmlentities(error.title)
   if (error.detail) {
    htmlMessage += `\n\n${htmlentities(error.detail)}`
   }
   htmlMessage += htmlentities(detailsCodeTemplate(error.status))
   if (error.type) {
    htmlMessage += html`<a target="_blank" rel="noreferrer" href="${error.type
     }">${error.type}</a>`
   }

   _messageDisplay(errorIcon(), htmlMessage)

   problemDetailsLog(problemDetailsLogMessage(error), error)

  } else {

   console.error(error)
   _messageDisplay(errorIcon(), htmlentities(error.message))

  }

 } else {

  errorDisplayBasicFunction(error)

 }

}

/**
 * @param {string} message
 */
export function messageDialogInfoDisplay(message) {

  _ensureInstance()

 if (_iconElement && _preElement && _dialogElement && !_dialogElement.open) {

  _messageDisplay(infoIcon(), htmlentities(message))

 } else {

  alert(message)

 }

}