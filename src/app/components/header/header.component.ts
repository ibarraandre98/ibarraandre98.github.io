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
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.determineActiveSection();
  }

  determineActiveSection(): void {
    const currentScrollY = window.scrollY;
    for (const section of this.sections) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (
          rect.top <= currentScrollY + 100 &&
          rect.bottom >= currentScrollY + 100
        ) {
          console.log(section);
          //this.activateNavigationLink(section);
          this.activeSection = section;
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
    console.log(selectedValue.value);
    localStorage.setItem('language', selectedValue.value);
    this.translate.setDefaultLang(selectedValue.value);
    window.location.reload();
  }
}
