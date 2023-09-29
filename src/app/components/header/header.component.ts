import { Component, HostListener, Renderer2, inject } from '@angular/core';
import { faBars, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faBars = faBars;
  public faEarthAmericas = faEarthAmericas;
  public buttonMenu = false;
  activeSection: string | null = 'home';
  sections = ['home', 'about', 'myProjects', 'achievements', 'contact'];
  public translate = inject(TranslateService);
  public storagedLanguage: string = localStorage.getItem('language')!;

  constructor(private renderer: Renderer2) {}

  showHideNav() {
    if (this.buttonMenu) this.buttonMenu = false;
    else this.buttonMenu = true;
  }

  public scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (section) {
      const offset = section.offsetTop - 70;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }

    if (this.buttonMenu) this.buttonMenu = false;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.determineActiveSection();
  }

  determineActiveSection(): void {
    const currentScrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (currentScrollY + windowHeight >= documentHeight) {
      this.activeSection = 'contact';
      this.activateNavigationLink('contact');
      return;
    }

    for (let i = 0; i <= this.sections.length - 1; i++) {
      const section = this.sections[i];
      const sectionElement = document.getElementById(section);

      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= +200 && rect.bottom >= +200) {
          this.activeSection = section;
          this.activateNavigationLink(section);
          return;
        }
      }
    }
    this.activeSection = null;
    this.activateNavigationLink(null);
  }

  activateNavigationLink(sectionId: string | null): void {
    this.sections.forEach((section) => {
      const link = document.querySelector(`a[href="#${section}"]`);
      if (link) {
        if (section === sectionId) {
          this.renderer.addClass(link, 'active');
        } else {
          this.renderer.removeClass(link, 'active');
        }
      }
    });
  }

  onSelectChangeLanguage(event: Event) {
    const selectedValue = event.target as HTMLSelectElement;
    localStorage.setItem('language', selectedValue.value);
    this.translate.setDefaultLang(selectedValue.value);
    window.location.reload();
  }
}
