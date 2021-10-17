import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<app-wrapper>
    <header class="header" role="banner">
      <app-logo></app-logo>
      <app-navigation></app-navigation>
    </header>
  </app-wrapper>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
