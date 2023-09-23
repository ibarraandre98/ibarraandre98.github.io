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
}
