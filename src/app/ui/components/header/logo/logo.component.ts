import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: ` <div class="logo">
    <img width="40" alt="Angular Logo" src="assets/images/logo.svg" />
    <span>Welcome</span>
  </div>`,
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
