import { NotifireModel } from '../toast/notifire-toast.model';

export interface ButtonsConfig {
  /**
   * Button text
   */
  text: string;

  /**
   * Should buttons text be bold.
   */
  bold?: boolean;

  /**
   * Action which will be called after buttons click
   * @param text? string
   * @returns void
   */
  action?: (toast: NotifireModel) => void;
}
