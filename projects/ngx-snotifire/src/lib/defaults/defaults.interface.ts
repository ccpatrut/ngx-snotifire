import { SnotifireGlobalConfig } from './global-config.interface';
import { SnotifireConfig } from '../models/snotifire-config.interface';

/**
 * Global configuration object
 */
export interface SnotifireDefaults {
  global?: SnotifireGlobalConfig;
  snotifireConfig?: SnotifireConfig;
  type?: {
    [key: string]: SnotifireConfig;
  };
}
