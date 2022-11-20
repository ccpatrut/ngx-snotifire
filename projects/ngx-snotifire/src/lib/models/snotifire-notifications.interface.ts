import { NotifireModel } from '../components/toast/notifire-toast.model';

export interface SnotifireNotifications {
  leftTop?: NotifireModel[];
  leftCenter?: NotifireModel[];
  leftBottom?: NotifireModel[];

  rightTop?: NotifireModel[];
  rightCenter?: NotifireModel[];
  rightBottom?: NotifireModel[];

  centerTop?: NotifireModel[];
  centerCenter?: NotifireModel[];
  centerBottom?: NotifireModel[];
}
