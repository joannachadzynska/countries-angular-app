import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutModalComponent {
  @Output() closeClick = new EventEmitter<void>();

  onClose(): void {
    this.closeClick.emit();
  }
}
