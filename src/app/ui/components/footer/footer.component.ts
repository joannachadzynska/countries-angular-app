import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  config: { [key: string]: string } | null = null;

  constructor() {
    setTimeout(() => {
      this.config = {
        footer: '© Countries Guide, All rights reserved.',
        date: new Date().toDateString(),
      };
    }, 500);
  }

  ngOnInit(): void {}
}
