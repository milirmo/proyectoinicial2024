import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario'; //importamos la interfaz Usuario de models

@Component({
  selector: 'app-iniciodesesion',
  templateUrl: './iniciodesesion.component.html',
  styleUrls: ['./iniciodesesion.component.css']
})
export class IniciodesesionComponent {
  hide = true;

  //definimos colección local de Usuarios
  public coleccionUsuariosLocales: Usuario[];

  constructor() {

    //creamos colección LOCAL de usuarios registrados
    this.coleccionUsuariosLocales = [
      {
        uid: '',
        nombre: 'Milagros',
        apellido: 'Romero',
        email: 'milagritosromero.mr@gmail.com',
        rol: 'Administrador',
        password: 'militata1'
      },

      {
        uid: '',
        nombre: 'Angie',
        apellido: 'Diaz',
        email: 'angiediaz@gmail.com',
        rol: 'Visitante',
        password: 'angiediaz1221'
      },

      {
        uid: '',
        nombre: 'Guadalupe',
        apellido: 'Araya',
        email: 'gguaradaa@gmail.com',
        rol: 'Administrador',
        password: 'guadaaa77'
      }
    ]
  }

  //definimos interfaz Usuario (inicializar)
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  //función para iniciar sesión de nuevos usuarios
  inicioSesion() {
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    //repetitiva para recorrer la coleccion de usuarios locales
    for(let i=0; i<=this.coleccionUsuariosLocales.length; i++){

      //usuariolocal correspond a esa posición de la colección en específico
      const usuariolocal = this.coleccionUsuariosLocales[i];

      //condicional para verificar la existencia del usuario ingresado en la colección
      if(usuariolocal.nombre === credenciales.nombre && usuariolocal.apellido === credenciales.apellido && usuariolocal.email === credenciales.email && usuariolocal.rol === credenciales.rol && usuariolocal.password === credenciales.password){
        //informamos al ususario que todo salió correctamente
        alert("¡Inicio exitoso!");
        break; //para parar la función
      } else{
        alert("Algo salió mal...")
      }
    }

    this.limpiarInputs();
  }

  //función para vaciar los inputs del formulario
  limpiarInputs(){
    const inputs= {
      uid: this.usuarios.uid= '',
      nombre: this.usuarios.nombre= '',
      apellido: this.usuarios.apellido= '',
      email: this.usuarios.email= '',
      rol: this.usuarios.rol= '',
      password: this.usuarios.password= ''
    }
  }
}
