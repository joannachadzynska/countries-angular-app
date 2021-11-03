import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <a routerLink="/">
      <div class="logo">
        <img width="40" alt="Angular Logo" src="assets/images/logo.svg" />
        <h4>Countries Guide</h4>
      </div></a
    >
  `,
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
