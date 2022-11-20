import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  SnotifireService,
  SnotificationPositionType,
  SnotifireConfig,
  SnotifireEventType,
  SnotifireModel,
  ToastDefaults,
} from 'ngx-snotifire';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  snotifireForm: FormGroup;
  positions: string[];
  themes = ['material', 'dark', 'simple'];

  constructor(
    protected readonly iconRegistry: MatIconRegistry,
    protected readonly sanitizer: DomSanitizer,
    readonly snotifireService: SnotifireService,
    private readonly fb: FormBuilder
  ) {
    this.positions = Object.keys(SnotificationPositionType);
    this.snotifireForm = this.fb.group({
      toastData: this.fb.group({
        title: ['Notification title!', [Validators.required]],
        body: ['Lorem ipsum dolor sit amet!', [Validators.required]],
      }),
      toastFunctionalConfig: this.fb.group({
        titleMaxLength: ['15', [Validators.required]],
        boydMaxLength: ['78', [Validators.required]],
        timeout: ['3000', [Validators.required]],
        backdrop: ['-1', [Validators.required]],
      }),
      toastVisualConfig: this.fb.group({
        isShowProgressBar: [true],
        isCloseOnClick: [true],
        isPauseOnHover: [true],
        isNewItemsOnTop: [true],
        isFilterDuplicates: [false],
      }),
      position: [this.positions[3]],
      notificationConf: this.fb.group({
        maxOnScreen: [6, [Validators.required]],
        maxAtPosition: [6, [Validators.required]],
      }),
      toastStyle: [this.themes[0], [Validators.required]],
    });
    this.addIcon('icon-fire', 'fire');
  }
  ngOnInit(): void {}

  protected addIcon(iconName: string, location: string): void {
    this.iconRegistry.addSvgIcon(
      iconName,
      this.sanitizer.bypassSecurityTrustResourceUrl(this.getSvg(location))
    );
  }

  get positionFormControl(): FormControl | null {
    return this.snotifireForm.get('position') as FormControl;
  }

  get themeControl(): FormControl | null {
    return this.snotifireForm.get('toastStyle') as FormControl;
  }

  getConfig(): SnotifireConfig {
    this.snotifireService.setDefaults({
      global: {
        newOnTop: this.visualConfig.isNewItemsOnTop,
        maxAtPosition: this.notificationConfig.maxAtPosition,
        maxOnScreen: this.notificationConfig.maxOnScreen,
        // @ts-ignore
        filterDuplicates: this.visualConfig.isFilterDuplicates,
      },
      snotifireConfig: ToastDefaults.toast,
    });
    return {
      bodyMaxLength: this.functionalConfig.boydMaxLength,
      titleMaxLength: this.functionalConfig.titleMaxLengt,

      backdrop: this.functionalConfig.backdrop,
      position: this.snotifireForm.getRawValue().position,
      timeout: this.functionalConfig.timeout,
      showProgressBar: this.visualConfig.isShowProgressBar,
      closeOnClick: this.visualConfig.isCloseOnClick,
      pauseOnHover: this.visualConfig.isPauseOnHover,
    };
  }

  onSuccess() {
    this.snotifireService.success(
      this.toastData.body,
      this.toastData.title,
      this.getConfig()
    );
  }
  onInfo() {
    this.snotifireService.info(
      this.toastData.body,
      this.toastData.title,
      this.getConfig()
    );
  }
  onError() {
    this.snotifireService.error(
      this.toastData.body,
      this.toastData.title,
      this.getConfig()
    );
  }
  onWarning() {
    this.snotifireService.warning(
      this.toastData.body,
      this.toastData.title,
      this.getConfig()
    );
  }

  onHtml() {
    const html = `<div class="snotifyToast__title"><b>Html Bold Title</b></div>
    <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div>`;
    this.snotifireService.html(html, this.getConfig());
  }

  onClear() {
    this.snotifireService.clear();
  }

  onAsyncLoading() {
    const errorAction = new Observable<SnotifireModel>((observer) => {
      setTimeout(() => {
        observer.error({
          title: 'Error',
          body: 'Example. Error 404. Service not found',
        });
      }, 2000);
    });

    const successAction = new Observable<SnotifireModel>((observer) => {
      setTimeout(() => {
        observer.next({
          body: 'Still loading.....',
        });
      }, 2000);

      setTimeout(() => {
        observer.next({
          title: 'Success',
          body: 'Example. Data loaded!',
          config: {
            closeOnClick: true,
            timeout: 5000,
            showProgressBar: true,
          },
        });
        observer.complete();
      }, 5000);
    });
    /*
      You should pass Promise or Observable of type Snotify to change some data or do some other actions
      More information how to work with observables:
      https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md
     */
    const { timeout, ...config } = this.getConfig(); // Omit timeout
    this.snotifireService.async(
      'This will resolve with error',
      'Async',
      errorAction,
      config
    );
    this.snotifireService.async(
      'This will resolve with success',
      successAction,
      config
    );
    this.snotifireService.async(
      'Called with promise',
      'Error async',
      new Promise((resolve, reject) => {
        setTimeout(
          () =>
            reject({
              title: 'Error!!!',
              body: 'We got an example error!',
              config: {
                closeOnClick: true,
              },
            }),
          1000
        );
        setTimeout(() => resolve({}), 1500);
      }),
      config
    );
  }

  onConfirmation() {
    /*
    Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     */
    const { timeout, closeOnClick, ...config } = this.getConfig(); // Omit props what i don't need
    this.snotifireService.confirm(this.toastData.body, this.toastData.title, {
      ...config,
      buttons: [
        {
          text: 'Yes',
          action: () => console.log('Clicked: Yes'),
          bold: false,
        },
        { text: 'No', action: () => console.log('Clicked: No') },
        {
          text: 'Later',
          action: (toast: any) => {
            console.log('Clicked: Later');
            this.snotifireService.remove(toast.id);
          },
        },
        {
          text: 'Close',
          action: (toast: any) => {
            console.log('Clicked: Close');
            this.snotifireService.remove(toast.id);
          },
          bold: true,
        },
      ],
    });
  }

  onPrompt() {
    /*
     Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     At the action of the first buttons we can get what user entered into input field.
     At the second we can't get it. But we can remove this toast
     */
    const { timeout, closeOnClick, ...config } = this.getConfig(); // Omit props what i don't need
    this.snotifireService
      .prompt(this.toastData.body, this.toastData.title, {
        ...config,
        buttons: [
          {
            text: 'Yes',
            action: (toast: any) => console.log('Said Yes: ' + toast.value),
          },
          {
            text: 'No',
            action: (toast: any) => {
              console.log('Said No: ' + toast.value);
              this.snotifireService.remove(toast.id);
            },
          },
        ],
        placeholder: 'Enter "ng-snotify" to validate this input', // Max-length = 40
      })
      .on(SnotifireEventType.INPUT, (toast) => {
        console.log(toast.value);
      });
  }

  private get functionalConfig(): FunctionalConfig {
    return this.snotifireForm.getRawValue().toastFunctionalConfig;
  }

  private get visualConfig(): VisualConfig {
    return this.snotifireForm.getRawValue().toastVisualConfig;
  }
  private get toastData(): ToastData {
    return this.snotifireForm.getRawValue().toastData;
  }

  private get notificationConfig(): NotificationConfig {
    return this.snotifireForm.getRawValue().notificationConf;
  }

  private getSvg(svg: string): string {
    return `assets/${svg}.svg`;
  }
}

export interface NotificationFormValue {
  position: SnotificationPositionType;
  toastData: ToastData;
}
interface ToastData {
  title: string;
  body: string;
}
interface FunctionalConfig {
  titleMaxLengt: number;
  boydMaxLength: number;
  timeout: number;
  backdrop: number;
}
interface NotificationConfig {
  maxOnScreen: number;
  maxAtPosition: number;
}

interface VisualConfig {
  isShowProgressBar: boolean;
  isCloseOnClick: boolean;
  isPauseOnHover: boolean;
  isNewItemsOnTop: boolean;
  isFilterDuplicates: boolean;
}
