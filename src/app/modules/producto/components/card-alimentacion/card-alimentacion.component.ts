import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';

@Component({
  selector: 'app-card-alimentacion',
  templateUrl: './card-alimentacion.component.html',
  styleUrls: ['./card-alimentacion.component.css']
})
export class CardAlimentacionComponent {

  coleccionProductos: Producto[] = []; //colección de todos los productos

  coleccionAlimentacion: Producto[] = []; //colección de productos de alimentaci+on

  productoSeleccionado!: Producto; //variable para seleccionar productos específicos

  modalVisible: boolean = false; //variable para manejar estado del modal (mostrar/ocultar)

  //patentamos de forma local el servicio para acceder a él
  constructor(public servicioCrud: CrudService){}

  // ngOnInit: inicializa al momento que se abre el componente
  ngOnInit(): void{

    //accedemos al método obtenerProducto y nos subscribimos a los cambios para recibir notoficación ante modificaciones
    this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto;

    //mostrará la colección de esa categoría hasta el momento
    this.mostrarProductoAlimentacion();

    })
  }

  //función para filtrar los productos de tipo "alimentación"
  mostrarProductoAlimentacion(){
    //iteramos colección de productos con un forEach
    this.coleccionProductos.forEach(producto =>{
      
      //si el producto es tipo alimentación => entra al condicional
      if(producto.categoria === "alimentacion"){
        //guarda el producto en la colección de productos del tipo alimentación
        this.coleccionAlimentacion.push(producto);
      }

    })
  }

  //función para mostrar producto
  mostrarVer(info: Producto){
    //mostrar modal
    this.modalVisible = true;
    //mostrar info del producto
    this.productoSeleccionado = info;
  }

}
