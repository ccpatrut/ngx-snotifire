import { SnotifireModel } from '../toast/snotifire-toast.model';

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
  action?: (toast: SnotifireModel) => void;
}
