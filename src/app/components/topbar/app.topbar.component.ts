import { Component } from '@angular/core';
import { AppMainComponent } from '../../app.main.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})

export class AppTopBarComponent {

  displayResponsive: boolean;
  sessionState: boolean = false;

  constructor(public app: AppMainComponent) { }

  showResponsiveDialog(): void {
    this.displayResponsive = true;
  }

  login(): void {
    this.sessionState = !this.sessionState;
    if(this.sessionState)
      this.displayResponsive = false;
  }
}
