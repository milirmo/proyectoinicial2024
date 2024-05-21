import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './page/registro/registro.component';
import { IniciodesesionComponent } from './page/iniciodesesion/iniciodesesion.component';

const routes: Routes = [

  {
    path: "registro", component: RegistroComponent
  },

  {
    path: "inicio-sesion", component: IniciodesesionComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
