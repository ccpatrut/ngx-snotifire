import { SnotificationPositionType, SnotifireType } from '../models';

/**
 * Snotify default configuration object
 */
export const ToastDefaults = {
  global: {
    newOnTop: true,
    maxOnScreen: 8,
    maxAtPosition: 8,
    filterDuplicates: false,
  },
  snotifireConfig: {
    type: SnotifireType.INFO,
    showProgressBar: true,
    timeout: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    bodyMaxLength: 150,
    titleMaxLength: 16,
    backdrop: -1,
    icon: undefined,
    iconClass: undefined,
    html: undefined,
    position: 'RIGHT_BOTTOM' as SnotificationPositionType,
    animation: { enter: 'fadeIn', exit: 'fadeOut', time: 400 },
  },
  type: {
    [SnotifireType.PROMPT]: {
      timeout: 0,
      closeOnClick: false,
      buttons: [
        { text: 'Ok', action: null, bold: true },
        { text: 'Cancel', action: null, bold: false },
      ],
      placeholder: 'Enter answer here...',
      type: SnotifireType.PROMPT,
    },
    [SnotifireType.CONFIRM]: {
      timeout: 0,
      closeOnClick: false,
      buttons: [
        { text: 'Ok', action: null, bold: true },
        { text: 'Cancel', action: null, bold: false },
      ],
      type: SnotifireType.CONFIRM,
    },
    [SnotifireType.SUCCESS]: {
      type: SnotifireType.SUCCESS,
    },
    [SnotifireType.ERROR]: {
      type: SnotifireType.ERROR,
    },
    [SnotifireType.WARNING]: {
      type: SnotifireType.WARNING,
    },
    [SnotifireType.INFO]: {
      type: SnotifireType.INFO,
    },
    [SnotifireType.ASYNC]: {
      pauseOnHover: false,
      closeOnClick: false,
      timeout: 0,
      showProgressBar: false,
      type: SnotifireType.ASYNC,
    },
  },
};
