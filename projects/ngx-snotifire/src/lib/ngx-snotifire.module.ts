import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  ButtonsComponent,
  NgxSnotifireComponent,
  PromptComponent,
  ToastComponent,
} from './components';
import { KeysPipe, TruncatePipe } from './pipes';
import { NotificationService } from './services';

@NgModule({
  declarations: [
    PromptComponent,
    ToastComponent,
    ButtonsComponent,
    TruncatePipe,
    KeysPipe,
    NgxSnotifireComponent,
  ],
  imports: [CommonModule],
  exports: [NgxSnotifireComponent],
})
export class NgxSnotifireModule {
  static forRoot(): ModuleWithProviders<NgxSnotifireModule> {
    return {
      ngModule: NgxSnotifireModule,
      providers: [NotificationService],
    };
  }
}
