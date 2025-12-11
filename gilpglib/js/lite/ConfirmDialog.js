import { cancel_value } from '../const/cancel_value.js'
import { ok_value } from '../const/ok_value.js'
import { promiseNew } from '../di/promiseNew.js'
import {
 confirmMessageBasicFunction
} from '../html/confirmMessageBasicFunction.js'
import { QuestionIcon } from '../i18n/lite/QuestionIcon.js'
import { cancelButtonText } from '../i18n/text/cancelButtonText.js'
import { okButtonText } from '../i18n/text/okButtonText.js'
import { button } from './button.js'
import { dialog } from './dialog.js'
import { div } from './div.js'
import { form } from './form.js'
import { pre } from './pre.js'

/**
 * @type {HTMLDialogElement | null}
 */
let _dialogElement = null

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
    QuestionIcon(),
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
      justify-content: center;
      align-items:center;
      margin-top:var(--layoutGap);
      gap:var(--layoutGap)`
    }
   },
    button({ value: cancel_value, autofocus: true }, cancelButtonText()),
    button({ value: ok_value }, okButtonText()))
  )

 }

 if (!_dialogElement.isConnected) {
  document.body.appendChild(_dialogElement)
 }

}

/**
 * @param {string} message
 */
export async function confirmDialogConfirm(message) {

 _ensureInstance()

 return promiseNew(async (/** @type {(result: boolean) => any} */ resolve) => {
  if (_dialogElement && _preElement && !_dialogElement.open) {
   _preElement.textContent = message
   _dialogElement.returnValue = cancel_value
   _dialogElement.showModal()
   _dialogElement.addEventListener("close", () => {
    if (_dialogElement) {
     resolve(_dialogElement.returnValue === ok_value)
    } else {
     resolve(false)
    }
   },
    { once: true })
  } else {
   resolve(await confirmMessageBasicFunction(message))
  }
 })

}