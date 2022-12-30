import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HousesComponent } from './houses/houses.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    HeaderComponent,
    IntroductionComponent,
    HousesComponent,
    LoginComponent,
    ContactComponent,
    LocationComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
