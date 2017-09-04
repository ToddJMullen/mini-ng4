import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesCourComp1Component } from './des-cour-comp1/des-cour-comp1.component';
import { ProfileImgComponent } from './profile-img/profile-img.component';

@NgModule({
  declarations: [
    AppComponent,
    DesCourComp1Component,
    ProfileImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
