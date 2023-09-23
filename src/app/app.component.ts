import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ibarraandre';
  public translate = inject(TranslateService);
  private language = 'en';

  constructor() {
    if (localStorage.getItem('language') != null) {
      this.language = localStorage.getItem('language')!;
    } else {
      localStorage.setItem('language', 'en');
    }
    this.translate.setDefaultLang(localStorage.getItem('language')!);
  }
}
