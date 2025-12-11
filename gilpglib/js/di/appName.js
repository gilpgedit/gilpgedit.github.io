import { defaultAppNameText } from "../i18n/text/defaultAppNameText.js"

let _appName = defaultAppNameText()

/**
 * @param {string} appName
 */
export function provideAppName(appName) {
 _appName = appName
}

export function appName() {
 return _appName
}