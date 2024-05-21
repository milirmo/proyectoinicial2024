import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { RegistroComponent } from './page/registro/registro.component';
import { IniciodesesionComponent } from './page/iniciodesesion/iniciodesesion.component';


@NgModule({
  declarations: [
    RegistroComponent,
    IniciodesesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ]
})
export class AutentificacionModule { }
