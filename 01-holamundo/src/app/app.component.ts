import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Nombre del componente
  templateUrl: './app.component.html', //Ruta del template HTML
  styleUrls: ['./app.component.css']//Ruta de los estilos CSS
})
export class AppComponent {
  nombre: string = 'Miguel'; // Propiedad para el título
  apellido: string = 'Calixto'; // Propiedad para el apellido
}
