import { NgModule , LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { AppComponent } from './app.component';

registerLocaleData(localeEs, 'es'); // Register Spanish locale

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } // Set default locale to Spanish
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
