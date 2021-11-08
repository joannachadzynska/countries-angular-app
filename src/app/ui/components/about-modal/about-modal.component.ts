import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutModalComponent {
  dangerResourceUrl = 'https://github.com/joannachadzynska';
  trustedResourceUrl: SafeResourceUrl;

  @Output() closeClick = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {
    this.trustedResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.dangerResourceUrl
    );
  }

  onClose(): void {
    this.closeClick.emit();
  }
}
