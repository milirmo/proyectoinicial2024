import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto'; //importo interfaz producto
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'; //importo para que lleven a la BD de firestore

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //definimos coleccion para los productos de la web
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private basedatos: AngularFirestore) {
    this.productosCollection = basedatos.collection('producto');
  }


  //CREAR PRODUCTOS
  crearProducto(producto: Producto){

    return new Promise(async(resolve,reject) => {
      try {

        //creamos numero id para el producto en la BD.
        const idProducto = this.basedatos.createId();

        //asignamos el id creado al atributo ID del producto
        producto.idProducto = idProducto;

        const resultado = await this.productosCollection.doc(idProducto).set(producto);
        resolve(resultado);

      } catch (error){
        reject(error);
      }
    })
  }

  //EDITAR PRODUCTOS
  //ELIMINAR PRODUCTOS
  //OBTENER PRODUCTOS

}
