import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `<nav>
    <!-- <a routerLink="/">home</a>
    <a routerLink="/about">About</a> -->
    <app-theme-switcher></app-theme-switcher>
  </nav>`,
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
