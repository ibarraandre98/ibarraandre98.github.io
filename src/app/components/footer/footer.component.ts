import { Component } from '@angular/core';
import {
  faHome,
  faEnvelope,
  faPhone,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public faHome = faHome;
  public faEnvelope = faEnvelope;
  public faPhone = faPhone;
  public faFile = faFile;
  public faGithub = faGithub;
  public faLinkedin = faLinkedin;
  public faYoutube = faYoutube;
}
