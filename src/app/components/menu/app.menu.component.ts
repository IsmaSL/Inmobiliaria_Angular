import { Component } from '@angular/core';
import { AppMainComponent } from '../../app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent {
    constructor(public app: AppMainComponent) { }
}
