import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  config: { [key: string]: string } | null = null;
  isModalOpen = false;

  constructor() {
    setTimeout(() => {
      this.config = {
        footer: '© Countries Guide, All rights reserved.',
        date: new Date().toDateString(),
      };
    }, 500);
  }

  onModalOpen(): void {
    this.isModalOpen = true;
  }
  onModalClose(): void {
    this.isModalOpen = false;
  }
}
