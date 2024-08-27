import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logueado = true; //booleana para manejo de registro e inicio de sesión
  deslogueado = false; //booleana para manejar el cierre de sesión

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) {}

  //FUNCIÓN INGRESAR (invierte los valores de las booleanas)
  ingresar(){
    this.logueado = false;
    this.deslogueado = true;
  }

  //FUNCION CERRAR SESIÓN (devuelve valores originales a las booleanas)
  cerrarSesion(){
    this.deslogueado = false;
    this.logueado = true;
    
    //redirigimos a la raíz del sitio web
    this.servicioAuth.cerrarsesion();
    this.servicioRutas.navigate(['/']);
  }

  //FUNCIÓN CAMBIAR FONDO
  cambiarFondo(){
    let toggle: HTMLInputElement | null = document.getElementById('toggle') as HTMLInputElement
    let label_toggle: HTMLElement | null = document.getElementById('label_toggle') as HTMLElement

    if(toggle){
      let checked: boolean = toggle.checked;
      document.body.classList.toggle('dark', checked)

      if(checked) {
        label_toggle!.innerHTML = '<i class="fa-solid fa-sun"></i>';
      } else {
        label_toggle!.innerHTML = '<i class="fa-solid fa-moon"></i>';
      }
    }
  }

}
