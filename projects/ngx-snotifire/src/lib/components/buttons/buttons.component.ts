import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { SnotifireToastModel } from '../toast/notifire-toast.model';
import { SnotifireService } from '../../services';

@Component({
    selector: 'notifire-button',
    templateUrl: './buttons.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
/**
 * Buttons component
 */
export class ButtonsComponent {
  /**
   * Get buttons Array
   */
  @Input() toast!: SnotifireToastModel;

  constructor(private readonly service: SnotifireService) {}

  /**
   * remove toast
   */
  remove() {
    this.service.remove(this.toast.id);
  }
}
