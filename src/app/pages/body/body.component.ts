import { Component } from '@angular/core';
import {
  faFile,
  faPlus,
  faPenRuler,
  faLaptopCode,
  faMicrochip,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  public faFile = faFile;
  public faGithub = faGithub;
  public faLinkedin = faLinkedin;
  public faYoutube = faYoutube;
  public faPlus = faPlus;
  public faPenRuler = faPenRuler;
  public faLaptopCode = faLaptopCode;
  public faMicrochip = faMicrochip;
  public faCode = faCode;
  public muski = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
}
