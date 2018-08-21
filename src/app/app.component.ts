import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Henry';

  array = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  Percent = 0.234;

  salary = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: "First",
      casa: "19"
    }
  } 
}
