import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButtonComponent implements OnInit {
  @Input() paddingBlock = '0.5rem';
  @Input() paddingInline = '2rem';
  @Output() onClick = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onClickButton(event: Event): void {
    this.onClick.emit(event);
  }
}
