import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Rotate } from './shared/rotate/rotate';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, Rotate],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('de');
    translate.use('de');
  }
}
