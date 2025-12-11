import { navigation_class } from "../const/navigation_class.js"
import { navigationChange_class } from "../const/navigationChange_class.js"
import {
 navigationChangeUndo_class
} from "../const/navigationChangeUndo_class.js"
import { classSelector } from "./classSelector.js"
import { htmlExport } from "./htmlExport.js"

export function navigationToggle() {
 const classList = document.body.classList
 if (classList.contains(navigationChange_class)) {
  classList.add(navigationChangeUndo_class)
 } else {
  classList.remove(navigationChangeUndo_class)
 }
 classList.toggle(navigationChange_class)
 const navigation = document.querySelector(classSelector(navigation_class))
 if (navigation) {
  const classList = navigation.classList
  if (classList.contains(navigationChange_class)) {
   classList.add(navigationChangeUndo_class)
  } else {
   classList.remove(navigationChangeUndo_class)
  }
  classList.toggle(navigationChange_class)
 }
}

htmlExport(navigationToggle)