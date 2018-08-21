import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { PasswordPipe } from './pipes/password.pipe';


@NgModule({ 
  declarations: [
    AppComponent,
    CapitalizedPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
