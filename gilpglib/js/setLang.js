import { langText } from "./js/i18n/text/langText.js"

export function setLang() {
 document.documentElement.setAttribute("lang", langText())
}