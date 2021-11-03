import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ThemeService } from '@bcodes/ngx-theme-service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent implements OnInit {
  @ViewChild('themeSwitcher', { static: false })
  selected$ = this.themeService.selectedTheme$;
  theme!: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  handleThemeSelected(e: Event, theme: string) {
    if ((e.currentTarget as HTMLElement).classList.contains('selected')) {
      return;
    }

    this.themeService.switchTheme(theme);
    this.theme = theme;
  }
}
