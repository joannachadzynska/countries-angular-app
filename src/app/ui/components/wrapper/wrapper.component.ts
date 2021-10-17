import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `<div class="wrapper">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
