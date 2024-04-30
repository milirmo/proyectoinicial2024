import { Component } from '@angular/core';

//importamos interfaz
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

//define propidad pública
public info: Animal[];

//inicializa la propiedad info
constructor() {

this.info = [
        {
          //objeto1
          id: "",
          nombre: "Gato panzón",
          edad: 5,
          raza: "Gato panzon",
          tamano: "0,5 metro(s)",
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaQqRwvwUknoJoBh5qpL7J9mO8loTFL9k-ZxC9rqECA&s",
          alt: "Imagen de gato panzon",
        },

        {
          //objeto2
        id: "",
        nombre: "Perro panzón",
        edad: 1,
        raza: "Perro panzon",
        tamano: "0,5 metro(s)",
        imagen: "https://heraldodemexico.com.mx/u/fotografias/m/2021/6/12/f638x638-383390_441557_5050.jpg",
        alt: "Imagen de perro panzon",
        },

        {
          //objeto3
        id: "",
        nombre: "Pato panzón",
        edad: 3,
        raza: "Pato panzon",
        tamano: "0,5 metro(s)",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoYHA4b5scGEnRjd-9NbBCNMfWqb1XnDOcva4TI6W8Q&s",
        alt: "Imagen de pato panzon",
        }
    ]
  }
}
