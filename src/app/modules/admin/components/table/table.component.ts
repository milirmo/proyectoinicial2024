import { Component } from '@angular/core';

import { Producto } from 'src/app/models/producto'; //importo interfaz producto
import { CrudService } from '../../service/crud.service'; //importo servicip crud
import { FormControl, FormGroup, Validators } from '@angular/forms'; //importo form controlm form engrupar y validatos (permite marcar errores)

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  //creamos coleccion local del productos y la definimo como arreglo (array)
  coleccionProductos: Producto[]= [];

  //definimos formulario para los productos
  /*
  los datos se inicializan en:
  string= ''
  number= 0
  */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{}

  async agregarProducto(){

    if(this.producto.valid){
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
        descripcion: this.producto.value.descripcion!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
      }

      await this.servicioCrud.crearProducto(nuevoProducto)
    .then (producto=> {
      alert("¡Nuevo producto agregado! :)")
    })
    .catch (error=> {
      alert("Ocurrió un error al intentar agregar un nuevo producto...")
    })

    };
  }

}
