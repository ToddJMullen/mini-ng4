import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }	from "@angular/platform-browser/animations";
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
	,BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
