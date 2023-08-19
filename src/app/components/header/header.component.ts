import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faBars = faBars;
  public buttonMenu = false;

  showHideNav() {
    if (this.buttonMenu) this.buttonMenu = false;
    else this.buttonMenu = true;
  }
}
