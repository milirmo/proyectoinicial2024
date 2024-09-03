import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from "sweetalert2"; //importamos sweet alert para hacer bonito el diseño de los alerts

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  //string que modifica el valor de @Input en el componente hijo
  product: string = ''; //inicializado tipo string y vacío

  //coleccion para recibir los productos que se agreguen (@Output)
  productosCarrusel: Producto[] = [];


  //FUNCIÓN PARA AGREGAR PRODUCTO RECIÉN COMPRADO AL CARRUSEL DE COMPRAS RECIENTES
  productoAnadido(producto: Producto) {

    //reemplazamos valor de "product"
    this.product = `${producto.nombre} : $${producto.precio}` // las `` funcionan como la interpoblación

    try {
      //agregamos la info recibida por el parámetro de la función a la colección del carrusel
      this.productosCarrusel.push(producto);

      Swal.fire({
        title: 'Felicidades',
        text: 'Su compra se ha añadido a "compras recientes".',
        icon: 'info',
      })
    } 
    catch (error) {
      Swal.fire({
        title: 'Oh...',
        text: 'Ha ocurrido un error: \n'+error,
        icon: 'error',
      })
    }

  }

}
