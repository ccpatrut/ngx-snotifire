import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { SnotifireEventType } from '../../models';
import { SnotifireToastModel } from '../toast/notifire-toast.model';

@Component({
  selector: 'ngx-snotify-prompt',
  templateUrl: './prompt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PromptComponent {
  inputType = SnotifireEventType.INPUT;
  /**
   * Get PROMPT placeholder
   */
  @Input() toast!: SnotifireToastModel;
  /**
   * Is PROMPT focused
   */
  isPromptFocused = false;

  getValue($event: any): string {
    return $event.target.value;
  }
}
