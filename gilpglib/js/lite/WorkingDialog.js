import { workingDialog_class } from '../const/workingDialog_class.js'
import { pageChangeDuration } from '../di/html/pageChangeDuration.js'
import { workingText } from '../i18n/text/workingText.js'
import { wait } from '../wait.js'
import { dialog } from './dialog.js'
import { progress } from './progress.js'

/**
 * @type {HTMLDialogElement | null}
 */
let _dialogElement = null
let _count = 0

function _ensureInstance() {

 if (!_dialogElement) {
  _dialogElement = dialog()
  _dialogElement.classList.add(workingDialog_class)
  _dialogElement.append(progress({ max: 100 }, workingText()))
 }

 if (!_dialogElement.isConnected) {
  document.body.appendChild(_dialogElement)
 }

}

export async function workingDialogDisplay() {
 _ensureInstance()
 _count++
 if (_count === 1 && _dialogElement && !_dialogElement.open) {
  addEventListener("keydown", _escapeListen)
  _dialogElement.showModal()
  await wait(pageChangeDuration())
 }
}

export async function workingDialogClose() {
 _ensureInstance()
 if (_count > 0) {
  _count--
 }
 if (_count <= 0 && _dialogElement && _dialogElement.open) {
  _count = 0
  removeEventListener("keydown", _escapeListen)
  _dialogElement.close()
  await wait(pageChangeDuration())
 }
}

/**
 * @param {KeyboardEvent} event
 */
function _escapeListen(event) {
 if (event.key === "Escape") {
  event.preventDefault()
 }
}