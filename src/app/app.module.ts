import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesCourComp1Component } from './des-cour-comp1/des-cour-comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    DesCourComp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
