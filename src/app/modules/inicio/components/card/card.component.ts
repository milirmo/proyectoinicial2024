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
          nombre: "Gato Siberiano: Walter",
          edad: 5,
          raza: "Siberiano",
          tamano: "0,4 metros: 40cm",
          imagen: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Siberian20Forest.2.jpg?itok=aWD1dDmr",
          alt: "Imagen de gato Siberiano",
        },

        {
          //objeto2
        id: "",
        nombre: "Perra Golden: Laura",
        edad: 1,
        raza: "Golden Retriever",
        tamano: "0,6 metros: 60cm",
        imagen: "https://d.newsweek.com/en/full/2297448/golden-retriever.jpg?w=1600&h=1600&q=88&f=55e676b03801944abe9791eff4272a2e",
        alt: "Imagen de perro Siberiano",
        },

        {
          //objeto3
        id: "",
        nombre: "Pez dorado: Pancho",
        edad: 3,
        raza: "Pez Dorado",
        tamano: "0,04 metros: 4cm",
        imagen: "https://img.freepik.com/fotos-premium/pez-dorado-nadando-su-acuario_863013-125142.jpg",
        alt: "Imagen de pez Dorado",
        }
    ]
  }
}
