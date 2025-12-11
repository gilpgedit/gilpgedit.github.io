import { moreControlsText } from "../i18n/text/moreControlsText.js"
import { BoldCommandButton } from "./BoldCommandButton.js"
import { ClearFormatCommandButton } from "./ClearFormatCommandButton.js"
import { CreateLinkCommandButton } from "./CreateLinkCommandButton.js"
import { details } from "./details.js"
import { div } from "./div.js"
import { FontNameCommandSelect } from "./FontNameCommandSelect.js"
import { FontSizeCommandSelect } from "./FontSizeCommandSelect.js"
import { IndentCommandButton } from "./IndentCommandButton.js"
import { ItalicCommandButton } from "./ItalicCommandButton.js"
import { JustifyCenterCommandButton } from "./JustifyCenterCommandButton.js"
import { JustifyFullCommandButton } from "./JustifyFullCommandButton.js"
import { JustifyLeftCommandButton } from "./JustifyLeftCommandButton.js"
import { JustifyRightCommandButton } from "./JustifyRightCommandButton.js"
import { LinkOffCommandButton } from "./LinkOffCommandButton.js"
import { OrderedListCommandButton } from "./OrderedListCommandButton.js"
import { OutdentCommandButton } from "./OutdentCommandButton.js"
import { ParagraphStyleCommandSelect } from "./ParagraphStyleCommandSelect.js"
import { RedoCommandButton } from "./RedoCommandButton.js"
import { StrikeThroughCommandButton } from "./StrikeThroughCommandButton.js"
import { SubScriptCommandButton } from "./SubScriptCommandButton.js"
import { summary } from "./summary.js"
import { SuperScriptCommandButton } from "./SuperScriptCommandButton.js"
import { UnderlineCommandButton } from "./UnderlineCommandButton.js"
import { UndoCommandButton } from "./UndoCommandButton.js"
import { UnorderedListCommandButton } from "./UnorderedListCommandButton.js"

/**
 * @template {HTMLElement} ElementType
 * @param {ElementType} richText
 * @returns {[HTMLDivElement, ElementType]}
 */
export function BasicRichTextCommands(richText) {
 return [
  div(
   BoldCommandButton(richText),
   ItalicCommandButton(richText),
   UnderlineCommandButton(richText),
   CreateLinkCommandButton(richText),
   LinkOffCommandButton(richText),
   StrikeThroughCommandButton(richText),
   UnorderedListCommandButton(richText),
   OrderedListCommandButton(richText),
   details(
    summary(
     { style: { fontSize: "small", cursor: "default" } },
     moreControlsText()
    ),
    ParagraphStyleCommandSelect(richText),
    FontNameCommandSelect(richText),
    FontSizeCommandSelect(richText),
    UndoCommandButton(richText),
    RedoCommandButton(richText),
    SuperScriptCommandButton(richText),
    SubScriptCommandButton(richText),
    ClearFormatCommandButton(richText),
    JustifyLeftCommandButton(richText),
    JustifyCenterCommandButton(richText),
    JustifyRightCommandButton(richText),
    JustifyFullCommandButton(richText),
    JustifyCenterCommandButton(richText),
    OutdentCommandButton(richText),
    IndentCommandButton(richText)
   )
  ),
  richText
 ]
}