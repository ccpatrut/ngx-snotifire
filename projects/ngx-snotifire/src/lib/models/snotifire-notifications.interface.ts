import { SnotifireToastModel } from '../components/toast/notifire-toast.model';

export interface SnotifireNotifications {
  leftTop?: SnotifireToastModel[];
  leftCenter?: SnotifireToastModel[];
  leftBottom?: SnotifireToastModel[];

  rightTop?: SnotifireToastModel[];
  rightCenter?: SnotifireToastModel[];
  rightBottom?: SnotifireToastModel[];

  centerTop?: SnotifireToastModel[];
  centerCenter?: SnotifireToastModel[];
  centerBottom?: SnotifireToastModel[];
}
