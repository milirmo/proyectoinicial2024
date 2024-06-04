import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario'; //importamos la interfaz de Usuario de models

@Component({
  selector: 'app-iniciodesesion',
  templateUrl: './iniciodesesion.component.html',
  styleUrls: ['./iniciodesesion.component.css']
})
export class IniciodesesionComponent {
  hide= true;


//importamos interfaz Usuario (inicializar)
perfiles: Usuario = {
    uid:'',
    nombre:'',
    apellido:'',
    email:'',
    rol:'',
    password:''
}

//creamos colección de usuarios, del tipo usuario, y lo definimos para que reciba arreglos
coleccionPerfiles: Usuario[] = [];

//función para iniciar sesión de nuevos usuarios
iniciodeSesionUsuarios(){

  //creamos constante para guardar la info. que ingrese el usuario
  const perfiles = {
    uid: this.perfiles.uid,
    email: this.perfiles.email,
    password: this.perfiles.password
  }

  //agregamos la nueva info (como nuevo objeto) a la colección de usuarios
  this.coleccionPerfiles.push(perfiles)

  //utilizamos localStorange para usar un arreglo de éste componente en otro componente
  const comparar = localStorange.getItem('')

  //mostrar el contenido de las credenciales de registro en la consola del navegador
  console.log(perfiles)
  console.log(this.coleccionPerfiles)
}
}
