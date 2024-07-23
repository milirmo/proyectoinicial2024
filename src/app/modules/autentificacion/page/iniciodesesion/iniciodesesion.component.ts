import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario'; //importamos la interfaz Usuario de models
import { AuthService } from '../../services/auth.service'; //importamos servicio de autentificación
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service'; //importamos servicio de firestore
import { Router } from '@angular/router'; //importamos componente de rutas de angular

@Component({
  selector: 'app-iniciodesesion',
  templateUrl: './iniciodesesion.component.html',
  styleUrls: ['./iniciodesesion.component.css']
})
export class IniciodesesionComponent {

  hide = true;

  //definimos interfaz Usuario (inicializar)
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }

  //función para iniciar sesión
  async iniciarSesion() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    // "try" encapsula la info que funciona bien
    try {
      //obtenemos usuario de la base de datos
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);

      if (!usuarioBD || usuarioBD.empty) {
        alert("Correo elecrónico no registrado...");
        this.limpiarInputs();
        return;
      }

      const usuarioDoc = usuarioBD.docs[0]; //creamos constante que almacene la contraseña que se obtendrá

      const usuarioData = usuarioDoc.data() as Usuario; //nose

      const hasherPassword = CryptoJS.SHA256(credenciales.password).toString(); //des-encriptar la contraseña obtenida

      if (hasherPassword !== usuarioData.password) {
        alert("Contraseña incorrecta");

        this.usuarios.password = '';
        return;
      }

      const res = await this.servicioAuth.iniciosesion(credenciales.email, credenciales.password)
        .then(res => {
          alert("¡Se pudo ingresar con éxito!");

          this.servicioRutas.navigate(['/inicio']);
        })
        .catch(err => {
          alert("Algo no funcionó... :(");

          this.limpiarInputs
        })

    } catch (error) {
      this.limpiarInputs();
    }
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
