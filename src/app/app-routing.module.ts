import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './modules/inicio/page/inicio/inicio.component';

const routes: Routes = [

  //ruta por defecto en la inicialización (se muestra mientras carge el modulo)
  {
    path: "", component: InicioComponent
  },
  
  //ruta que vincula al módulo de inicio y todo su contenido
  {
    path: "", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  
  //ruta que vincula al módulo de productos y todo su contenido
  {
    path: "", loadChildren:()=>import('./modules/productos/productos.module').then(m=>m.ProductosModule)
  },

  //ruta que vincula al módulo de autentificación y todo su contenido
  {
    path: "", loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
