import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {UserService } from "./user.service";

import { AppComponent } from './app.component';
import { ProfileImgComponent } from './profile-img/profile-img.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileImgComponent,
    ProfileListComponent
  ],
  imports: [
    BrowserModule
	,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
