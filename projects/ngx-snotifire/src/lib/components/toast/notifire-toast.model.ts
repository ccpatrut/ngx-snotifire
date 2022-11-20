import { Subject, Subscription } from 'rxjs';
import { SnotifireConfig } from '../../models/snotifire-config.interface';
import { SnotifireEventType } from '../../models/snotifire-event.type';
import { SnotifireType } from '../../models/snotifire.type';

/**
 * Toast main model
 */
export class SnotifireToastModel {
  /**
   * Emits NotifireEventType
   */
  readonly eventEmitter = new Subject<SnotifireEventType>();

  /**
   * Holds all subscribers because we need to unsubscribe from all before toast get destroyed
   */
  private eventsHolder: Subscription[] = [];

  /**
   * Toast prompt value
   */
  value?: string;

  /**
   * Toast validator
   */
  valid: boolean = true;

  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly body: string,
    public readonly config: SnotifireConfig
  ) {
    if (this.config && this.config.type === SnotifireType.PROMPT) {
      this.value = '';
    }
    this.on(SnotifireEventType.HIDDEN, () => {
      this.eventsHolder.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
      });
    });
  }
  /**
   * Subscribe to toast events
   * @returns this
   * @param event NotificationEventType
   * @param action (toast: this) => void
   */
  on(event: SnotifireEventType, action: (toast: this) => void): this {
    this.eventsHolder.push(
      this.eventEmitter.subscribe((e: SnotifireEventType) => {
        if (e === event) {
          action(this);
        }
      })
    );
    return this;
  }

  /**
   * Tests if a toast equals this toast.
   * @returns boolean true then equals else false.
   * @param toast notifire-toast
   */
  equals(toast: SnotifireToastModel): boolean {
    return this.config && toast.config
      ? this.body === toast.body &&
          this.title === toast.title &&
          this.config.type === toast.config.type
      : this.body === toast.body && this.title === toast.title;
  }
}
