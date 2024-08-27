import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  //definimos colección de productos locales
  coleccionProductos: Producto[] = [];

  //variable local para seleccionar un producto específico
  productoSeleccionado!: Producto;

  //variable local para manejar estado de un modal
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  //función para mostrar más información de los productos
  mostrarVer(info: Producto){

    //cambio estado del modal a true (ahora es visible)
    this.modalVisible = true;
    
    //guardo en variable seleccionando la info de producto elegido
    this.productoSeleccionado = info;
  }
}
