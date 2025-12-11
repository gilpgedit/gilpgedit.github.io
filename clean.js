import { directoryRemove } from "./gilpglib/js/node/directoryRemove.js"

directoryRemove("docs")
 .then(() => directoryRemove(".parcel-cache"))
 .catch(error => console.log(error))