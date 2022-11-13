import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { SnotifireEventType, NotificationPositionType } from '../../models';
import { SnotifireNotifications } from '../../models/snotifire-notifications.interface';
import { NotifireModel } from '../toast/notifire-toast.model';
import { NotificationService } from '../../services';

@Component({
  selector: 'ngx-snotifire',
  templateUrl: './ngx-snotifire.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxSnotifireComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly unsubscribe$ = new Subject<void>();
  /**
   * Toasts array
   */
  notifications!: SnotifireNotifications;
  /**
   * Toasts emitter
   */
  emitter!: Subscription;
  /**
   * Helper for slice pipe (maxOnScreen)
   */
  dockSizeA!: number;
  /**
   * Helper for slice pipe (maxOnScreen)
   */
  dockSizeB!: number | undefined;
  /**
   * Helper for slice pipe (maxAtPosition)
   */
  blockSizeA!: number;
  /**
   * Helper for slice pipe (maxAtPosition)
   */
  blockSizeB!: number | undefined;
  /**
   * Backdrop Opacity
   */
  backdrop: number | undefined = -1;
  /**
   * How many toasts with backdrop in current queue
   */
  withBackdrop: NotifireModel[] = [];

  constructor(readonly service: NotificationService) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.service.emitter
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((toasts: NotifireModel[]) => {
        if (
          this.service.defaultConfig &&
          this.service.defaultConfig.global &&
          this.service.defaultConfig.global.newOnTop
        ) {
          this.dockSizeA = this.service.defaultConfig.global.maxOnScreen
            ? -this.service.defaultConfig.global.maxOnScreen
            : 6;
          this.dockSizeB = undefined;
          this.blockSizeA = this.service.defaultConfig.global.maxAtPosition
            ? -this.service.defaultConfig.global.maxAtPosition
            : 4;
          this.blockSizeB = undefined;
          this.withBackdrop = toasts.filter(
            (toast) =>
              toast.config &&
              toast.config.backdrop &&
              toast.config.backdrop >= 0
          );
        } else {
          this.dockSizeA = 0;
          this.dockSizeB =
            this.service.defaultConfig.global &&
            this.service.defaultConfig.global.maxOnScreen;
          this.blockSizeA = 0;
          this.blockSizeB =
            this.service.defaultConfig.global &&
            this.service.defaultConfig.global.maxAtPosition;
          this.withBackdrop = toasts
            .filter(
              (toast) =>
                toast.config &&
                toast.config.backdrop &&
                toast.config.backdrop >= 0
            )
            .reverse();
        }
        this.notifications = this.splitToasts(
          toasts.slice(this.dockSizeA, this.dockSizeB)
        );
        this.stateChanged(SnotifireEventType.MOUNTED);
      });
  }

  /**
   * Split toasts toasts into different objects
   * @param toasts notifire-toast[]
   * @returns SnotifyNotifications
   */
  splitToasts(toasts: NotifireModel[]): SnotifireNotifications {
    const result: SnotifireNotifications = {};

    for (const property in NotificationPositionType) {
      if (NotificationPositionType.hasOwnProperty(property)) {
        result[
          NotificationPositionType[
            property as keyof typeof NotificationPositionType
          ]
        ] = [];
      }
    }

    toasts.forEach((toast: NotifireModel) => {
      if (toast.config.position) {
        const keyIndex = Object.keys(NotificationPositionType).indexOf(
          toast.config.position
        );
        const searchedString = Object.values(NotificationPositionType)[
          keyIndex
        ];
        result[searchedString]?.push(toast);
      }
    });
    console.log(result);
    return result;
  }

  getNotificationArray(
    notifications: SnotifireNotifications,
    position: NotificationPositionType
  ): NotifireModel[] | undefined {
    return notifications[position];
  }

  /**
   * Changes the backdrop opacity
   * @param event NotificationEventType
   */
  stateChanged(event: SnotifireEventType) {
    if (!this.withBackdrop.length) {
      if (this.backdrop && this.backdrop >= 0) {
        this.backdrop = -1;
      }
      return;
    }
    switch (event) {
      case 'mounted':
        if (this.backdrop && this.backdrop < 0) {
          this.backdrop = 0;
        }
        break;
      case 'beforeShow':
        this.backdrop =
          this.withBackdrop[this.withBackdrop.length - 1].config?.backdrop;
        break;
      case 'beforeHide':
        if (this.withBackdrop.length === 1) {
          this.backdrop = 0;
        }
        break;
      case 'hidden':
        if (this.withBackdrop.length === 1) {
          this.backdrop = -1;
        }
        break;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
