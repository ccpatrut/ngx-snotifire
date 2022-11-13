import { NotificationGlobalConfig } from './global-config.interface';
import { SnotifireConfig } from '../models/snotifire-config.interface';

/**
 * Global configuration object
 */
export interface NotificationDefaults {
  global?: NotificationGlobalConfig;
  snotifireConfig?: SnotifireConfig;
  type?: {
    [key: string]: SnotifireConfig;
  };
}
