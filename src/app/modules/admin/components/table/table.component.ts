import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../service/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos colección local de productos -> la definimos como array
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto; // ! <- tomar valores vacíos

  modalVisibleProducto: boolean = false;

  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })
  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    // subscribe -> método de notificación de cambios (observable)
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }
  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      }
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {

          alert("Ha agregado un nuevo producto con éxito.");

          //resetea el formulario y queda vacío
          this.producto.reset
        })

        .catch(error => {

          alert("Ha ocurrido un error al cargar un producto. /n"+error);

          this.producto.reset
        })
    }
  }

  // función vinculada al modal y el botón de la tabla
  mostrarBorrar(productoSeleccionado: Producto){
    this.modalVisibleProducto = true;

    this.productoSeleccionado = productoSeleccionado;
  }

  borrarProducto(){
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
    .then(respuesta => {
      alert("Se ha podido eliminar con éxito.");
    })
    .catch(error => {
      alert("Ha ocurrido un error al eliminar un producto: \n"+error);
    })
  }

  //EDITAR PRODUCTOS
  mostrarEditar(productoSeleccionado: Producto){

    this.productoSeleccionado = productoSeleccionado;

    //toma valores del producto seleccionado y los autocompleta en el form del modal (menos id)
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt
    })
  }

  editarProducto(){
    let datos: Producto = {

      //Solo idProducto no se modifica por el usuario (por eso usamos productoSeleccionado)
      idProducto: this.productoSeleccionado.idProducto,
      //Los demás atributos reciben nueva información desde el formulario
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
    }

    //Enviamos al método el id del producto seleccionado y los datos actualizados
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
    .then(producto => {
      alert("¡Producto modificado con éxito! =)")
    })

  .catch(error => {
    alert("Ocurrió un problema al intentar modificar el producto... /n"+error)
  })
  }
}