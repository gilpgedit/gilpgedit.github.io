import { appName } from "./appName.js"
import { htmlExport } from "../html/htmlExport.js"
import {
 appTitleTemplate
} from "../i18n/template/appTitleTemplate.js"

/**
 * @param {string} title
 */
export function appTitle(title) {
 return appTitleTemplate(title, appName())
}

htmlExport(appTitle)