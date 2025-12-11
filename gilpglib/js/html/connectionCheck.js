import { noConnectionText } from "../i18n/text/noConnectionText.js"

export async function connectionCheck() {
 if (!navigator.onLine) throw new Error(noConnectionText());
 const response = await fetch("/test.html")
 if (!response.ok) throw new Error(noConnectionText());
 
}