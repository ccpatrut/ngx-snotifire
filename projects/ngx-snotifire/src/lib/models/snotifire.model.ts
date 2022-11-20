import { SafeHtml } from '@angular/platform-browser';
import { SnotifireConfig } from './snotifire-config.interface';
import { SnotifireType } from './snotifire.type';

export class SnotifireModel {
  constructor(
    public type?: SnotifireType,
    /**
     * Notification Title
     */
    public title?: string,
    /**
     * Notification message
     */
    public body?: string,
    /**
     * Config object
     */
    public config?: SnotifireConfig,
    /**
     * Html content
     */
    public html?: string | SafeHtml
  ) {}
}
