
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component'; // Importa el componente Header]
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component'; // Importa el componente Body
// Contiene todos los componentes de la aplicación
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Declara el componente Header
    BodyComponent, FooterComponent // Declara el componente Body
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
