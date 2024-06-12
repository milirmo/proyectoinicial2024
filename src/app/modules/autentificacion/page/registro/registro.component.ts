import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

//importamos servicio de autentificación
import { AuthService } from '../../service/auth.service';
//importamos componente de rutas de angular
import { Router } from '@angular/router';

@Component({
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  hide = true;

  //importaciones de interfaz 'Usuario'
  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) { }

  //importamos interfaz Usuario (inicializar)
  usuarios: Usuario = {
    //comillas simples por tipo string
    //"0" (CERO) para los tipo number
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  //creamos colección de usuarios, del tipo usuario, y lo definimos para que reciba arreglos
  coleccionUsuarios: Usuario[] = [];


  //función para registro de nuevos usuarios
  async registrarUsuarios() {

    /* COMENTO CONSTANTE DE CREDENCIALES
    //creamos constante para guardar la info. que ingrese el usuario
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }*/

    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
    }

    const rta = await this.servicioAuth.registrar(credenciales.email, credenciales.password)

      //el metodo THEN es una promesa que devuelve el mismo valor si todo sale bien
      .then(rta => {
        alert("¡Registro exitoso! :)")
        this.servicioRutas.navigate(['/inicio']);
      })

      //el metodo CATCH captura una falla y devuelve un error cuando la promesa salga mal
      .catch(error => {
        alert("Algo salió mal al intentar registrar el nuevo usuario... \n" + error); // "\n"+error)" para mostrar el error ocurrido
      })

    //llamar a la función limpiarInputs para ejecutarla
    this.limpiarInputs();


    /* COMENTO PUSH DE CREDENCIALES
    //agregamos la nueva info (como nuevo objeto) a la colección de usuarios
    this.coleccionUsuarios.push(credenciales)
    */

    /* COMENTO LOCALSTORANGE
    //utilizo localstorange para almacenar la info de usuarios
    localStorage.setItem(this.usuarios.email, JSON.stringify(credenciales));

    alert("¡Registro completado! Bienvenid@.")
    */
  }


  //función para vaciar los inputs del formulario
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }

}
