import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario'; //importamos la interfaz Usuario de models
import { AuthService } from '../../service/auth.service'; //importamos servicio de autentificación
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service'; //importamos servicio de firestore
import { Router } from '@angular/router'; //importamos componente de rutas de angular

@Component({
  selector: 'app-iniciodesesion',
  templateUrl: './iniciodesesion.component.html',
  styleUrls: ['./iniciodesesion.component.css']
})
export class IniciodesesionComponent {
  hide = true;

/*COMENTO COLLECCIÓN DE USUARIOS LOCALES

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
        email: 'guadaaraya@gmail.com',
        rol: 'Administrador',
        password: 'guada77'
      }
    ]
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
*/

//definimos interfaz Usuario (inicializar)
usuarios: Usuario = {
  uid: '',
  nombre: '',
  apellido: '',
  email: '',
  rol: '',
  password: ''
}


constructor (
  public servicioAuth: AuthService,
  public servicioFirestore: FirestoreService,
  public servicioRutas: Router
){}


//función para iniciar sesión
async iniciarSesion(){
  const credenciales = {
    email: this.usuarios.email,
    password: this.usuarios.password
  }

  const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
  .then(res => {
    alert("¡Se pudo ingresar con éxito!");

    this.servicioRutas.navigate(['/inicio']);
  })
  .catch(err => {
    alert("Algo no funcionó... :(");

    this.limpiarInputs
  })
}


//función para vaciar los inputs del formulario
  limpiarInputs(){
    const inputs = {
      uid: this.usuarios.uid= '',
      nombre: this.usuarios.nombre= '',
      apellido: this.usuarios.apellido= '',
      email: this.usuarios.email= '',
      rol: this.usuarios.rol= '',
      password: this.usuarios.password= ''
    }
  }
}
