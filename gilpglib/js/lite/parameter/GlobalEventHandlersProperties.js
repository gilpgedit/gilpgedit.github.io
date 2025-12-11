/**
 * @template {GlobalEventHandlers} ElementType
 * @typedef {Object} GlobalEventHandlersProperties
 * @property {((this: ElementType, ev: UIEvent) => any) | null} [onabort] Fires when the user aborts the download.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)
 * @property {((this: ElementType, ev: AnimationEvent) => any) | null} [onanimationcancel] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)
 * @property {((this: ElementType, ev: AnimationEvent) => any) | null} [onanimationend] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)
 * @property {((this: ElementType, ev: AnimationEvent) => any) | null} [onanimationiteration] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)
 * @property {((this: ElementType, ev: AnimationEvent) => any) | null} [onanimationstart] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [onauxclick] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)
 * @property {((this: ElementType, ev: InputEvent) => any) | null} [onbeforeinput] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onbeforetoggle] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)
 * @property {((this: ElementType, ev: FocusEvent) => any) | null} [onblur] Fires when the object loses the input focus.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [oncancel] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/cancel_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [oncanplay] Occurs when playback is possible, but would require further buffering.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [oncanplaythrough] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onchange] Fires when the contents of the object or selection have changed.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [onclick] Fires when the user clicks the left mouse button on the object
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onclose] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [oncontextlost] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [oncontextmenu] Fires when the user clicks the right mouse button in the client area, opening the context menu.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [oncontextrestored] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)
 * @property {((this: ElementType, ev: ClipboardEvent) => any) | null} [oncopy] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [oncuechange] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)
 * @property {((this: ElementType, ev: ClipboardEvent) => any) | null} [oncut] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [ondblclick] Fires when the user double-clicks the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)
 * @property {((this: ElementType, ev: DragEvent) => any) | null} [ondrag] Fires on the source object continuously during a drag operation.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)
 * @property {((this: ElementType, ev: DragEvent) => any) | null} [ondragend] Fires on the source object when the user releases the mouse at the close of a drag operation.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)
 * @property {((this: ElementType, ev: DragEvent) => any) | null} [ondragenter] Fires on the target element when the user drags the object to a valid drop target.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)
 * @property {((this: ElementType, ev: DragEvent) => any) | null} [ondragleave] Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)
 * @property {((this: ElementType, ev: DragEvent) => any) | null} [ondragover] Fires on the target element continuously while the user drags the object over a valid drop target.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)
 * @property {((this: ElementType, ev: DragEvent) => any) | null} [ondragstart] Fires on the source object when the user starts to drag a text selection or selected object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)
 * @property {((this: ElementType, ev: DragEvent) => any) | null} [ondrop] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [ondurationchange] Occurs when the duration attribute is updated.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onemptied] Occurs when the media element is reset to its initial state.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onended] Occurs when the end of playback is reached.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)
 * @property {OnErrorEventHandler} [onerror] Fires when an error occurs during object loading.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)
 * @property {((this: ElementType, ev: FocusEvent) => any) | null} [onfocus] Fires when the object receives focus.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)
 * @property {((this: ElementType, ev: FormDataEvent) => any) | null} [onformdata] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)
 * @property {((this: ElementType, ev: PointerEvent) => any) | null} [ongotpointercapture] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [oninput] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [oninvalid] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)
 * @property {((this: ElementType, ev: KeyboardEvent) => any) | null} [onkeydown] Fires when the user presses a key.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)
 * @property {((this: ElementType, ev: KeyboardEvent) => any) | null} [onkeypress] Fires when the user presses an alphanumeric key.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)
 * @property {((this: ElementType, ev: KeyboardEvent) => any) | null} [onkeyup] Fires when the user releases a key.
 *                 s[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onload] Fires immediately after the browser loads the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onloadeddata] Occurs when media data is loaded at the current playback position.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onloadedmetadata] Occurs when the duration and dimensions of the media have been determined.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onloadstart] Occurs when Internet Explorer begins looking for media data.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)
 * @property {((this: ElementType, ev: PointerEvent) => any) | null} [onlostpointercapture] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [onmousedown] Fires when the user clicks the object with either mouse button.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [onmouseenter] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [onmouseleave] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [onmousemove] Fires when the user moves the mouse over the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [onmouseout] Fires when the user moves the mouse pointer outside the boundaries of the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [onmouseover] Fires when the user moves the mouse pointer into the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)
 * @property {((this: ElementType, ev: MouseEvent) => any) | null} [onmouseup] Fires when the user releases a mouse button while the mouse is over the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)
 * @property {((this: ElementType, ev: ClipboardEvent) => any) | null} [onpaste] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onpause] Occurs when playback is paused.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onplay] Occurs when the play method is requested.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onplaying] Occurs when the audio or video has started playing.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)
 * @property {((this: ElementType, ev: PointerEvent) => any) | null} [onpointercancel] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)
 * @property {((this: ElementType, ev: PointerEvent) => any) | null} [onpointerdown] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)
 * @property {((this: ElementType, ev: PointerEvent) => any) | null} [onpointerenter] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)
 * @property {((this: ElementType, ev: PointerEvent) => any) | null} [onpointerleave] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)
 * @property {((this: ElementType, ev: PointerEvent) => any) | null} [onpointermove] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)
 * @property {((this: ElementType, ev: PointerEvent) => any) | null} [onpointerout] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)
 * @property {((this: ElementType, ev: PointerEvent) => any) | null} [onpointerover] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)
 * @property {((this: ElementType, ev: PointerEvent) => any) | null} [onpointerup] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)
 * @property {((this: ElementType, ev: ProgressEvent) => any) | null} [onprogress] Occurs to indicate progress while downloading media data.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onratechange] Occurs when the playback rate is increased or decreased.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onreset] Fires when the user resets a form.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)
 * @property {((this: ElementType, ev: UIEvent) => any) | null} [onresize] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onscroll] Fires when the user repositions the scroll box in the scroll bar on the object.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onscrollend] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)
 * @property {((this: ElementType, ev: SecurityPolicyViolationEvent) => any) | null} [onsecuritypolicyviolation] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onseeked] Occurs when the seek operation ends.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onseeking] Occurs when the current playback position is moved.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onselect] Fires when the current selection changes.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onselectionchange] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onselectstart] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onslotchange] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onstalled] Occurs when the download has stopped.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)
 * @property {((this: ElementType, ev: SubmitEvent) => any) | null} [onsubmit] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onsuspend] Occurs if the load operation has been intentionally halted.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [ontimeupdate] Occurs to indicate the current playback position.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [ontoggle] [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event)
 * @property {((this: ElementType, ev: TouchEvent) => any) | null} [ontouchcancel] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)
 * @property {((this: ElementType, ev: TouchEvent) => any) | null} [ontouchend] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)
 * @property {((this: ElementType, ev: TouchEvent) => any) | null} [ontouchmove] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)
 * @property {((this: ElementType, ev: TouchEvent) => any) | null} [ontouchstart] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)
 * @property {((this: ElementType, ev: TransitionEvent) => any) | null} [ontransitioncancel] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)
 * @property {((this: ElementType, ev: TransitionEvent) => any) | null} [ontransitionend] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)
 * @property {((this: ElementType, ev: TransitionEvent) => any) | null} [ontransitionrun] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onvolumechange] Occurs when the volume is changed, or playback is muted or unmuted.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)
 * @property {((this: ElementType, ev: Event) => any) | null} [onwaiting] Occurs when playback stops because the next frame of a video resource is not available.
 *           [MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)
 * @property {((this: ElementType, ev: WheelEvent) => any) | null} [onwheel] [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)
 */