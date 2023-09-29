import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public translate = inject(TranslateService);
  private title = inject(Title);
  private language = 'en';

  constructor() {
    if (localStorage.getItem('language') != null) {
      this.language = localStorage.getItem('language')!;
    } else {
      localStorage.setItem('language', this.language);
    }
    this.translate.setDefaultLang(localStorage.getItem('language')!);
    this.translate.get('APP_TITLE').subscribe((res: string) => {
      const APP_TITLE = res;
      this.title.setTitle(APP_TITLE);
    });
  }
}
