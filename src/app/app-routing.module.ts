import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './modules/inicio/page/inicio/inicio.component';

const routes: Routes = [

  /*{path: "", component: InicioComponent},

  {path: "inicio", component: InicioComponent},

  {path: "galeria", component: GaleriaComponent},

  {path: "servicios", component: ServiciosComponent},*/


  //ruta por defecto en la inicialización (se muestra mientras carge el modulo)
  {
    path: "", component: InicioComponent
  },
  
  //ruta que vincula al módulo de inicio y todo su contenido
  {
    path: "", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
