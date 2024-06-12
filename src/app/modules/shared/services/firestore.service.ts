import { Injectable } from '@angular/core';
//Cloud Firestore --> accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
//importamos interfaz Usuario
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //Definimos de forma privada la colección de usuarios para que no sea accesible en toda la aplicación.
  //La definimos como una colección de firestore que respete la estructura de nuestra interfaz 'Usuario'.
private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) { 
    //usuariosCollection va a definir la nueva colección 'usuarios' que estaráen nuestra BD.
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }
}
