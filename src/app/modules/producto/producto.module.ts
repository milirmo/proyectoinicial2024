import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

import { ProductoComponent } from './page/producto/producto.component';
import { JugueteComponent } from './page/juguete/juguete.component';
import { AlimentacionComponent } from './page/alimentacion/alimentacion.component';
import { IndumentariaComponent } from './page/indumentaria/indumentaria.component';

//componentes locales
import { CardComponent } from './components/card/card.component';
import { CardAlimentacionComponent } from './components/card-alimentacion/card-alimentacion.component';


@NgModule({
  declarations: [
    CardComponent,
    ProductoComponent,
    JugueteComponent,
    AlimentacionComponent,
    IndumentariaComponent,
    CardAlimentacionComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    CardComponent,
    ProductoComponent,
    JugueteComponent,
    AlimentacionComponent,
    IndumentariaComponent,
    CardAlimentacionComponent,
  ]
})
export class ProductoModule { }
