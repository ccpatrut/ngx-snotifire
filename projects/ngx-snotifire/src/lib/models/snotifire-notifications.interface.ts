import { SnotifireModel } from '../components/toast/snotifire-toast.model';

export interface SnotifireNotifications {
  leftTop?: SnotifireModel[];
  leftCenter?: SnotifireModel[];
  leftBottom?: SnotifireModel[];

  rightTop?: SnotifireModel[];
  rightCenter?: SnotifireModel[];
  rightBottom?: SnotifireModel[];

  centerTop?: SnotifireModel[];
  centerCenter?: SnotifireModel[];
  centerBottom?: SnotifireModel[];
}
