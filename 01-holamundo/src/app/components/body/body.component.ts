import { Component } from "@angular/core";

@Component({
    selector: 'app-body', // Nombre del componente
    templateUrl: './body.component.html', // Ruta del template HTML
})
export class BodyComponent {
    mostrar: boolean = true;
  frase:any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
    };

    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus', 'Green Goblin'];
}