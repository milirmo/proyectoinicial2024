import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;

  //importamos interfaz Usuario (inicializar)
  usuarios: Usuario = {
    //comillas simples por tipo string
    //"0" (CERO) para los tipo number
    uid:'',
    nombre:'',
    apellido:'',
    email:'',
    rol:'',
    password:''
}


  //creamos colección de usuarios, del tipo usuario, y lo definimos para que reciba arreglos
  coleccionUsuarios: Usuario[] = [];


  //función para registro de nuevos usuarios
  registrarUsuarios(){

    //creamos constante para guardar la info. que ingrese el usuario
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    //agregamos la nueva info (como nuevo objeto) a la colección de usuarios
    this.coleccionUsuarios.push(credenciales)

  }

}
