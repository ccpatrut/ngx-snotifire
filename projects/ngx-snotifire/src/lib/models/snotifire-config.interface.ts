import { SafeHtml } from '@angular/platform-browser';
import { ButtonsConfig } from '../components/buttons/buttons-config.interface';
import { SnotifireAnimate } from './snotifire-animate.interface';
import { SnotificationPositionType } from './snotifire-position.type';
import { SnotifireType } from './snotifire.type';

export interface SnotifireConfig {
  /**
   * Notification timeout in milliseconds.
   * Disable timeout = 0
   */
  timeout?: number;

  /**
   * Enable/Disable progress bar.
   * Disabled if timeout is 0.
   */
  showProgressBar?: boolean;

  /**
   * Type of toast, affects toast style.
   * It's not recommended to change it.
   * Depends on toast type.
   */
  type?: SnotifireType;

  /**
   * If the notification should dissapear on click
   */
  closeOnClick?: boolean;

  /**
   * If the timeout countdown should pause on hober
   */
  pauseOnHover?: boolean;

  /**
   * Buttons config.
   */
  buttons?: ButtonsConfig[];

  /**
   * Placeholder for Prompt toast
   */
  placeholder?: string;
  /**
   * Toast title maximum length
   */
  titleMaxLength?: number;
  /**
   * Toast body maximum length
   */
  bodyMaxLength?: number;
  /**
   * Activate custom icon.
   * You should provide full tag, e.g.
   * ```html
   * <img src="assets/custom-icon.png"/>
   * ```
   * ```html
   * <svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 48 48;" xml:space="preserve" width="48px" height="48px">
   *     <g><path....../></g>
   * </svg>
   * ```
   */
  icon?: string;

  /**
   * Custom icon class.
   */
  iconClass?: string;

  /**
   * Animation config
   */
  animation?: SnotifireAnimate;
  /**
   * Html string witch overrides toast content
   */
  html?: string | SafeHtml;
  /**
   * Toasts position on screen
   */
  position?: SnotificationPositionType;

  /**
   * Backdrop opacity.
   * * **Range:** `0.0 - 1.0`.
   * * **Disabled:** `-1`
   */
  backdrop?: number;
}
