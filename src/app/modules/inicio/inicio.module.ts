import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//vista inicio
import { InicioComponent } from './page/inicio/inicio.component';

//componente (tarjeta) creado desde consola
import { CardComponent } from './components/card/card.component';

//importamos card de angular material
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],

  //importa desde afuera
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  
  //exporta a todo el proyecto
  exports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
