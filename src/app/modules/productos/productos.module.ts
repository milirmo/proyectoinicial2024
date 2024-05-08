import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';


@NgModule({
  declarations: [
    ProductosComponent,
    AlimentacionComponent,
    JugueteComponent,
    IndumentariaComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports: [
    ProductosComponent,
    AlimentacionComponent,
    JugueteComponent,
    IndumentariaComponent
  ]
})
export class ProductosModule { }
